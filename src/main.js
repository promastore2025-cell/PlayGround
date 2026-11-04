import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { City } from './city.js';
import { Player, Ped, Enemy } from './characters.js';
import { Vehicle, TrafficManager, PoliceManager } from './vehicles.js';
import { Effects } from './effects.js';
import { HUD } from './hud.js';
import { MissionSystem, MISSIONS } from './missions.js';
import { AudioEngine } from './audio.js';
import { clamp, damp, dampAngle, rand, randInt, choice, chance, dist, glowTexture, canvasTexture, CITY, formatMoney } from './utils.js';

class Input {
  constructor(game) {
    this.game = game;
    this.keys = new Set();
    this.pressed = new Set();
    this.mouseDown = false;
    this.mouseJustDown = false;
    window.addEventListener('keydown', (e) => {
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      this.pressed.add(e.code);
      if (e.code === 'KeyH') game.toggleHelp();
      if (e.code === 'KeyM') game.toggleMap();
      if (e.code === 'KeyP') game.togglePause();
      if (e.code === 'KeyR') game.tryReload();
      if (e.code === 'Escape') game.closeOverlays();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) { this.mouseDown = true; this.mouseJustDown = true; }
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouseDown = false; });
    window.addEventListener('blur', () => { this.keys.clear(); this.mouseDown = false; });
  }
  isDown(code) { return this.keys.has(code); }
  consume(code) {
    if (this.pressed.has(code)) { this.pressed.delete(code); return true; }
    return false;
  }
  consumeMouse() {
    const v = this.mouseJustDown;
    this.mouseJustDown = false;
    return v;
  }
  endFrame() { this.pressed.clear(); this.mouseJustDown = false; }
  clear() { this.keys.clear(); this.pressed.clear(); this.mouseDown = false; }
}

class Game {
  constructor() {
    this.container = document.getElementById('app');
    this.canvas = document.getElementById('game');
    this.started = false;
    this.paused = false;
    this.mapOpen = false;
    this.helpOpen = false;
    this.deathState = false;
    this.elapsed = 0;
    this.wanted = 0;
    this.wantedFloat = 0;
    this.lastCrimeAt = -999;
    this.wantedDecay = 0;
    this.money = 0;
    this.missionsDone = 0;
    this.hours = 17.8;
    this.cameraYaw = 0;
    this.cameraPitch = 0.02;
    this.cameraDistance = 6.0;
    this.cameraTargetSmooth = new THREE.Vector3();
    this.cameraPosSmooth = new THREE.Vector3();
    this.shakeAmount = 0;
    this.mouseIdle = 99;
    this.autostart = new URLSearchParams(location.search).has('autostart');
    const hourParam = new URLSearchParams(location.search).get('hour');
    if (hourParam) this.hours = clamp(parseFloat(hourParam), 0, 23.9);
    this.vehicles = [];
    this.peds = [];
    this.enemies = [];

    this.initRenderer();
    this.initScene();

    this.city = new City(this.scene);
    this.effects = new Effects(this);
    this.player = new Player(this);
    this.hud = new HUD(this);
    this.input = new Input(this);

    this.traffic = new TrafficManager(this, 18);
    this.spawnParkedCars();
    this.spawnPeds(26);
    this.audio = new AudioEngine();
    this.police = new PoliceManager(this);
    this.missions = new MissionSystem(this);

    this.setupEvents();
    this.setupCamera();
    this.applyTimeOfDay(0);
    this.clock = new THREE.Clock();
    this.boundLoop = this.loop.bind(this);
    requestAnimationFrame(this.boundLoop);

    if (this.autostart) {
      this.startGame(false);
    } else {
      this.hudToggleStartScene();
    }

    window.__game = this;
    window.addEventListener('error', (e) => {
      console.error('[VICE] runtime error', e.error || e.message);
    });
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x3a1a4a, 140, 720);
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 12000);
    this.camera.position.set(258, 24, 200);

    this.skyUniforms = {
      topColor: { value: new THREE.Color(0x241a52) },
      horizonColor: { value: new THREE.Color(0xff7a6b) },
      lowColor: { value: new THREE.Color(0x160b26) },
      sunDir: { value: new THREE.Vector3(-0.7, 0.15, 0.4) },
      sunColor: { value: new THREE.Color(0xffd08a) },
      uNight: { value: 0.0 },
      uTime: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 lowColor;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform float uNight;
        uniform float uTime;
        varying vec3 vDir;
        void main() {
          vec3 dir = normalize(vDir);
          float h = dir.y;
          vec3 col = mix(lowColor, horizonColor, smoothstep(-0.18, 0.02, h));
          col = mix(col, topColor, smoothstep(-0.02, 0.44, h));
          vec3 sd = normalize(sunDir);
          float sunDot = max(dot(dir, sd), 0.0);
          float glow = pow(sunDot, 6.0) * 0.24 + pow(sunDot, 42.0) * 0.5;
          float disc = smoothstep(0.99935, 0.9998, sunDot);
          col += sunColor * (glow + disc * 1.6) * (1.0 - uNight * 0.55);
          // soft pink atmospheric band
          col += vec3(0.9, 0.25, 0.55) * smoothstep(0.09, 0.0, abs(h - 0.025)) * 0.06;
          // subtle dithering to avoid banding
          float d = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453);
          col += (d - 0.5) * 0.006;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(6000, 40, 22), skyMat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    this.sunDir = new THREE.Vector3(0.4, 0.2, 0.6);
    this.sun = new THREE.DirectionalLight(0xffb27a, 2.4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -70;
    this.sun.shadow.camera.right = 70;
    this.sun.shadow.camera.top = 70;
    this.sun.shadow.camera.bottom = -70;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 280;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.04;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.moonLight = new THREE.DirectionalLight(0x8fa9ff, 0.0);
    this.moonLight.position.set(-60, 100, -40);
    this.scene.add(this.moonLight);

    this.hemi = new THREE.HemisphereLight(0x9fb4ff, 0x3a2a22, 0.78);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0x565070, 0.42);
    this.scene.add(this.ambient);
    this.fill = new THREE.DirectionalLight(0x9eb8ff, 0.38);
    this.fill.position.set(-80, 50, -60);
    this.scene.add(this.fill);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.62, 0.55, 0.82);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    // stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = [];
    for (let i = 0; i < 1100; i++) {
      const r = 1300 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(rand(0.02, 1));
      starPos.push(Math.cos(theta) * Math.sin(phi) * r, Math.cos(phi) * r, Math.sin(theta) * Math.sin(phi) * r);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    this.stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, transparent: true, opacity: 0, sizeAttenuation: false, depthWrite: false }));
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);

    this.moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('#dfe8ff', 0.18), transparent: true, depthWrite: false, opacity: 0, blending: THREE.AdditiveBlending }));
    this.moon.scale.setScalar(90);
    this.scene.add(this.moon);

    this.sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('#ffb36b', 0.06), transparent: true, depthWrite: false, opacity: 0.8, blending: THREE.AdditiveBlending }));
    this.sunGlow.scale.setScalar(260);
    this.scene.add(this.sunGlow);
  }

  setupCamera() {
    const p = this.player.position;
    this.cameraTargetSmooth.set(p.x, p.y + 1.5, p.z);
    const offset = new THREE.Vector3(Math.sin(this.cameraYaw) * 6, 3, Math.cos(this.cameraYaw) * 6);
    this.cameraPosSmooth.copy(this.cameraTargetSmooth).add(offset);
    this.camera.position.copy(this.cameraPosSmooth);
    this.camera.lookAt(this.cameraTargetSmooth);
  }

  setupEvents() {
    window.addEventListener('resize', () => this.onResize());
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === this.canvas;
      if (this.wasLocked && !locked && this.started && !this.paused && !this.mapOpen && !this.deathState) {
        this.pause(true);
      }
      this.wasLocked = locked;
    });
    this.canvas.addEventListener('click', () => {
      if (this.started && !this.paused && !this.mapOpen && document.pointerLockElement !== this.canvas) this.requestLock();
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== this.canvas) return;
      if (this.mapOpen || this.paused || this.deathState) return;
      this.cameraYaw -= e.movementX * 0.0023;
      this.cameraPitch = clamp(this.cameraPitch + e.movementY * 0.0019, -0.12, 0.78);
      this.mouseIdle = 0;
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => { this.audio.start(); this.startGame(true); });
    document.getElementById('resume-btn').addEventListener('click', () => this.pause(false));
    document.getElementById('map-close').addEventListener('click', () => this.toggleMap(false));
  }

  hudToggleStartScene() {
    // gentle camera drift behind the start screen
    this.sceneTitlePos = this.camera.position.clone();
  }

  startGame(lock = true) {
    if (this.started) return;
    this.started = true;
    document.getElementById('start-screen').classList.add('hidden');
    document.body.classList.add('playing');
    this.audio.start();
    if (lock) this.requestLock();
    this.input.clear();
    this.hud.setMissionName('Free Roam');
    setTimeout(() => {
      this.hud.showBanner('VICE CITY · 1986', 'OCEAN DRIVE', 'The sun is going down. The city is waking up.', 4.2);
    }, 350);
    this.hud.subtitle('Welcome to the strip. Look for the pink marker.', 4);
  }

  requestLock() {
    try {
      const p = this.canvas.requestPointerLock?.();
      if (p && p.catch) p.catch(() => {});
    } catch { /* headless / denied */ }
    this.wasLocked = true;
  }

  pause(show) {
    if (this.deathState) return;
    this.paused = show;
    this.hud.showPause(show, this.missionsDone);
    if (show) {
      this.input.clear();
      if (document.pointerLockElement) document.exitPointerLock?.();
      document.body.classList.remove('playing');
    } else {
      this.hud.closeMap();
      this.mapOpen = false;
      this.requestLock();
      document.body.classList.add('playing');
    }
  }

  togglePause() {
    if (this.mapOpen) { this.toggleMap(false); return; }
    this.pause(!this.paused);
    this.audio?.ui();
  }

  toggleMap(force) {
    if (this.paused || this.deathState) return;
    const show = force ?? !this.mapOpen;
    this.mapOpen = show;
    this.hud.el['map-screen'].classList.toggle('hidden', !show);
    if (show) {
      this.hud.drawBigMap();
      if (this.helpOpen) this.toggleHelp();
    }
  }

  toggleHelp() {
    this.helpOpen = this.hud.toggleHelp();
    if (this.helpOpen && this.mapOpen) this.toggleMap(false);
  }

  closeOverlays() {
    if (this.mapOpen) this.toggleMap(false);
    if (this.helpOpen) this.toggleHelp();
  }

  /* ---------------- spawning ---------------- */
  randomSidewalkSpawn(minDist = 8, maxDist = 120) {
    const p = this.player?.position || { x: 226, z: 142 };
    for (let i = 0; i < 40; i++) {
      let x, z;
      if (chance(0.36)) {
        x = rand(214, 232);
        z = clamp(p.z + rand(-maxDist, maxDist), -228, 228);
      } else if (chance(0.18)) {
        x = rand(246, 282);
        z = clamp(p.z + rand(-maxDist, maxDist), -228, 228);
      } else {
        const b = choice(this.city.blocks);
        const side = randInt(0, 3);
        if (side === 0) { x = b.cx + rand(-38, 38); z = b.cz - 38; }
        else if (side === 1) { x = b.cx + rand(-38, 38); z = b.cz + 38; }
        else if (side === 2) { x = b.cx - 38; z = b.cz + rand(-38, 38); }
        else { x = b.cx + 38; z = b.cz + rand(-38, 38); }
      }
      const d = Math.hypot(x - p.x, z - p.z);
      if (d < minDist || d > maxDist) continue;
      const before = new THREE.Vector3(x, 0, z);
      if (this.city.collide(before, 0.5)) continue;
      return { x, z };
    }
    return { x: 215 + rand(-20, 20), z: 128 + rand(-20, 20) };
  }

  spawnPeds(count) {
    for (let i = 0; i < count; i++) {
      let s;
      if (i < 11) {
        s = { x: rand(214, 236), z: this.player.position.z + rand(-75, 75) };
        const before = new THREE.Vector3(s.x, 0, s.z);
        if (this.city.collide(before, 0.5)) s = this.randomSidewalkSpawn(5, 90);
      } else {
        s = this.randomSidewalkSpawn(8, 140);
      }
      try { this.peds.push(new Ped(this, s)); } catch (e) { console.warn(e); }
    }
  }

  spawnParkedCars() {
    const data = [
      [205.4, 166, 0, 'sedan', 0x2e8bc0],
      [194.6, 92, Math.PI, 'pickup', 0x8c3e2e],
      [195.8, 78, Math.PI, 'taxi', 0xffcf2e],
      [205.4, -58, 0, 'cheetah', 0xffffff],
      [96.6, 205, Math.PI / 2, 'van', 0xe8e3d8],
      [-103.4, 205, -Math.PI / 2, 'sedan', 0x6b4a82],
      [-205.4, 42, 0, 'taxi', 0xffcf2e],
      [205.4, 12, 0, 'infernus', 0xff2d95],
    ];
    for (const [x, z, h, type, color] of data) {
      const v = new Vehicle(this, type, { x, z }, h, color);
      v.driver = null;
      this.vehicles.push(v);
    }
  }

  /* ---------------- loop ---------------- */
  loop() {
    requestAnimationFrame(this.boundLoop);
    const raw = this.clock.getDelta();
    const dt = Math.min(raw, 0.05);
    if (this.started && !this.paused && !this.mapOpen) {
      this.update(dt);
    } else if (!this.started) {
      this.updateTitleScene(dt);
    } else {
      this.input.endFrame();
    }
    if (this.started) this.hud.update(dt);
    this.composer.render();
    window.__gameReady = true;
  }

  updateTitleScene(dt) {
    this.elapsed += dt;
    this.hours = 17.85 + Math.sin(this.elapsed * 0.015) * 0.2;
    this.applyTimeOfDay(dt);
    this.city.update(dt, this.elapsed);
    this.effects.update(dt);
    this.camera.position.set(288 + Math.sin(this.elapsed * 0.05) * 5, 17 + Math.sin(this.elapsed * 0.09) * 1.5, 178 + Math.cos(this.elapsed * 0.04) * 8);
    this.camera.lookAt(new THREE.Vector3(180, 7, 55));
  }

  update(dt) {
    this.elapsed += dt;
    this.mouseIdle += dt;
    this.hours = (this.hours + dt * 0.0075) % 24;
    this.applyTimeOfDay(dt);

    this.missions.update(dt);
    this.player.update(dt);

    for (const v of this.vehicles) v.update(dt, this.elapsed);
    this.traffic.update(dt, this.elapsed);
    this.police.update(dt, this.wanted);
    this.updateWanted(dt);

    for (const p of this.peds) p.update(dt, this.player.position);
    for (const e of this.enemies) e.update(dt, this.player.position);
    this.cleanupCorpses();

    this.updateCamera(dt);
    this.handleInteraction();
    this.handleCombat(dt);
    this.updateReload(dt);

    this.effects.update(dt);
    this.city.update(dt, this.elapsed);
    this.audio.update(this, dt);
    if (this.player.dead) this.input.clear();
    this.input.endFrame();
  }

  /* ---------------- time / sky ---------------- */
  applyTimeOfDay(dt) {
    const angle = ((this.hours - 6) / 24) * Math.PI * 2;
    this.sunDir.set(-Math.cos(angle) * 0.82, Math.sin(angle), -0.45 + Math.cos(angle + 0.4) * 0.15).normalize();
    this.skyUniforms.sunDir.value.copy(this.sunDir);
    this.skyUniforms.uTime.value = this.elapsed;
    const elevation = this.sunDir.y;
    const night = clamp(-elevation * 3.2, 0, 1);
    const golden = clamp(1 - Math.abs(elevation) * 3.1, 0, 1);

    const sunColor = new THREE.Color().setHSL(0.075 + golden * 0.015, 0.72, 0.5 + golden * 0.14);
    this.sun.color.copy(sunColor);
    this.sun.intensity = clamp(2.1 + golden * 1.6, 0, 3.8) * (1 - night * 0.9);

    const sunPos = this.player ? this.player.position : new THREE.Vector3();
    this.sun.position.set(sunPos.x + this.sunDir.x * 120, 80 + this.sunDir.y * 150, sunPos.z + this.sunDir.z * 120);
    this.sun.target.position.set(sunPos.x, 0, sunPos.z);
    this.moonLight.intensity = night * 0.95;
    this.moonLight.position.set(sunPos.x - this.sunDir.x * 100, 60 + Math.abs(this.sunDir.y) * 70, sunPos.z - this.sunDir.z * 100);

    this.hemi.intensity = 0.8 - night * 0.08;
    this.ambient.intensity = 0.38 + night * 0.42;
    this.fill.intensity = 0.22 + night * 0.55;

    const daylight = clamp((elevation + 0.16) / 0.48, 0, 1);
    const nightTop = new THREE.Color(0x05070f);
    const dayTop = new THREE.Color(0x2a5fb8);
    const sunsetTop = new THREE.Color(0x2a1552);
    const nightHor = new THREE.Color(0x241338);
    const dayHor = new THREE.Color(0xb7d8ff);
    const sunsetHor = new THREE.Color(0xff8a52);
    const lowNight = new THREE.Color(0x090714);
    const lowDay = new THREE.Color(0x6d86a8);
    const skyTop = nightTop.clone().lerp(dayTop, daylight).lerp(sunsetTop, golden * 0.85);
    const skyHor = nightHor.clone().lerp(dayHor, daylight).lerp(sunsetHor, golden * 0.95);
    const skyLow = lowNight.clone().lerp(lowDay, daylight).lerp(new THREE.Color(0x5a2b51), golden * 0.8);
    this.skyUniforms.topColor.value.copy(skyTop);
    this.skyUniforms.horizonColor.value.copy(skyHor);
    this.skyUniforms.lowColor.value.copy(skyLow);
    this.skyUniforms.uNight.value = night;
    this.skyUniforms.sunColor.value.setHSL(0.08 + golden * 0.02, 0.85, 0.62);

    const fogDay = skyHor.clone().lerp(new THREE.Color(0x8a5a7a), 0.45);
    const fogNight = new THREE.Color(0x0b1024);
    const fogGold = new THREE.Color(0xc2795c);
    const fog = fogNight.clone().lerp(fogDay, 1 - night).lerp(fogGold, golden * 0.5);
    this.scene.fog.color.copy(fog);
    this.scene.fog.near = 120 + night * 20;
    this.scene.fog.far = 680 - night * 100;

    this.stars.material.opacity = clamp(night * 1.2 - 0.12, 0, 1) * 0.9;
    this.moon.material.opacity = clamp(night * 1.3, 0, 0.95);
    this.moon.position.set(this.camera.position.x - this.sunDir.x * 900, 220 + Math.abs(this.sunDir.y) * 300, this.camera.position.z - this.sunDir.z * 900);
    this.renderer.toneMappingExposure = 1.02 - night * 0.16;
    this.bloom.strength = 0.48 + night * 0.33;

    if (this.sunGlow) {
      this.sunGlow.position.set(this.camera.position.x + this.sunDir.x * 1100, Math.max(-60, this.sunDir.y * 800), this.camera.position.z + this.sunDir.z * 1100);
      this.sunGlow.material.opacity = clamp(golden * 0.45 + 0.08, 0, 1) * (1 - night * 0.8);
    }
    if (this.city.waterUniforms) {
      this.city.waterUniforms.uFogColor.value.copy(fog);
      this.city.waterUniforms.uSun.value.copy(this.sunDir);
    }
  }

  clockString() {
    const h = Math.floor(this.hours) % 24;
    const m = Math.floor((this.hours % 1) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  /* ---------------- camera ---------------- */
  updateCamera(dt) {
    const p = this.player;
    let target, desired, dist = 6.3, height = 0.7;
    if (p.inVehicle && !p.inVehicle.destroyed) {
      const v = p.inVehicle;
      // auto-follow behind car unless the player has just used the mouse
      if (this.mouseIdle > 1.7) this.cameraYaw = dampAngle(this.cameraYaw, v.heading + Math.PI, 2.2, dt);
      dist = 9.2 + clamp(Math.abs(v.speed) / v.spec.maxSpeed, 0, 1) * 2.2;
      height = 2.45;
      const fwd = new THREE.Vector3(Math.sin(this.cameraYaw), 0, Math.cos(this.cameraYaw));
      target = new THREE.Vector3(v.position.x, v.position.y + 1.3, v.position.z).addScaledVector(fwd, -1.2);
    } else {
      this.cameraDistance = 6.3;
      const fwd = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
      target = new THREE.Vector3(p.position.x, p.position.y + 1.5, p.position.z).addScaledVector(fwd, 1.35);
      if (p.speed > 7.5) dist = 6.8;
    }

    const cosP = Math.cos(this.cameraPitch);
    const offset = new THREE.Vector3(
      Math.sin(this.cameraYaw) * cosP * dist,
      height + Math.sin(this.cameraPitch) * dist,
      Math.cos(this.cameraYaw) * cosP * dist,
    );
    desired = target.clone().add(offset);

    // keep camera out of buildings
    const dir = desired.clone().sub(target);
    const len = dir.length();
    dir.normalize();
    const ray = new THREE.Raycaster(target, dir, 0, len + 0.5);
    const hits = ray.intersectObjects(this.city.shootables, false);
    if (hits.length && hits[0].distance < len - 0.2) {
      desired.copy(target).addScaledVector(dir, Math.max(0.8, hits[0].distance - 0.35));
    }

    // ground clamp
    const gh = this.city.groundHeight(desired.x, desired.z);
    if (desired.y < gh + 0.6) desired.y = gh + 0.6;

    this.cameraTargetSmooth.lerp(target, 1 - Math.exp(-dt * 14));
    this.cameraPosSmooth.lerp(desired, 1 - Math.exp(-dt * 11));

    this.camera.position.copy(this.cameraPosSmooth);
    if (this.shakeAmount > 0.001) {
      this.camera.position.x += rand(-1, 1) * this.shakeAmount * 0.5;
      this.camera.position.y += rand(-1, 1) * this.shakeAmount * 0.4;
      this.camera.position.z += rand(-1, 1) * this.shakeAmount * 0.5;
      this.shakeAmount = damp(this.shakeAmount, 0, 6, dt);
    }
    this.camera.lookAt(this.cameraTargetSmooth);
    this.camera.fov = p.inVehicle ? 66 + clamp(Math.abs(p.inVehicle.speed) / 40, 0, 1) * 10 : 62;
    this.camera.updateProjectionMatrix();
  }

  shake(amount) { this.shakeAmount = Math.max(this.shakeAmount, amount); }

  /* ---------------- interactions ---------------- */
  nearestVehicle(maxDist = 4.8) {
    let best = null, bestD = maxDist;
    for (const v of this.vehicles) {
      if (v.destroyed || v === this.player.inVehicle) continue;
      const d = Math.hypot(v.position.x - this.player.position.x, v.position.z - this.player.position.z);
      if (d < bestD) { bestD = d; best = v; }
    }
    return best;
  }

  handleInteraction() {
    const p = this.player;
    if (p.dead) return;
    const near = this.nearestVehicle(4.8);
    let prompt = null;
    if (this.missions.nearStart) {
      prompt = `Start job — ${this.missions.mission.name}`;
    } else if (p.inVehicle) {
      prompt = `Exit ${p.inVehicle.name}`;
    } else if (near) {
      prompt = near.driver === 'police' ? 'Steal police cruiser' : `Enter ${near.name}`;
    }
    this.hud.setPrompt(prompt);

    if (!this.input.consume('KeyE')) return;
    if (this.missions.nearStart && !p.inVehicle) {
      if (this.missions.tryStart()) { this.audio?.ui(); return; }
    }
    if (p.inVehicle) {
      p.exitVehicle();
      this.audio?.ui();
      return;
    }
    if (near) {
      if (near.driver === 'police') this.crime(1, 'Grand theft auto');
      near.driver = 'player';
      near.ai = null;
      p.enterVehicle(near);
      this.cameraYaw = near.heading + Math.PI;
      this.mouseIdle = 99;
      this.audio?.ui();
      if (near.mission) this.hud.toast('Get this ride to the drop-off', 'pink');
    }
  }

  playerEnteredVehicle(v) {
    this.mouseIdle = 99;
    if (v.spec.sports) this.hud.toast(`${v.name} — hold SHIFT to boost`, 'pink');
  }

  playerExitedVehicle(v) {
    this.cameraYaw = v.heading + Math.PI;
    this.mouseIdle = 99;
    this.hud.toast('Vehicle parked', '');
  }

  vehicleWorldCollisions(v, dt) {
    if (v.destroyed) return;
    const speed = Math.abs(v.speed);
    for (const p of this.peds) {
      if (p.dead) continue;
      if (dist(v.position, p.position) < 1.9) {
        if (speed > 3) {
          p.hit(100 + speed * 4, v.position);
          this.effects?.blood(p.position, 2);
          this.audio?.impact();
          if (v.driver === 'player') this.shake(0.4);
        }
      }
    }
    for (const e of this.enemies) {
      if (e.dead) continue;
      if (dist(v.position, e.position) < 1.9 && speed > 3) {
        e.hit(100 + speed * 4, v.position);
        this.crime(1, 'Gang violence');
        this.shake(0.3);
      }
    }
    for (const other of this.vehicles) {
      if (other === v || other.destroyed) continue;
      const d = Math.hypot(other.position.x - v.position.x, other.position.z - v.position.z);
      if (d < 2.85) {
        const dx = (v.position.x - other.position.x) || 0.01;
        const dz = (v.position.z - other.position.z) || 0.01;
        const l = Math.hypot(dx, dz) || 1;
        const push = (2.85 - d) * 0.5;
        other.position.x -= (dx / l) * push;
        other.position.z -= (dz / l) * push;
        v.position.x += (dx / l) * push;
        v.position.z += (dz / l) * push;
        if (v.collisionCooldown <= 0) {
          const rel = Math.abs(v.speed - other.speed);
          if (rel > 3 || v.driver === 'player') {
            v.damage(rel * 1.2 + 2);
            other.damage(rel * 1.2 + 2);
            const pt = new THREE.Vector3((v.position.x + other.position.x) / 2, v.position.y + 0.6, (v.position.z + other.position.z) / 2);
            this.effects?.sparks(pt, 14);
            this.audio?.crash(clamp(rel / 30, 0.05, 0.5));
            if (v.driver === 'player' || other.driver === 'player') {
              this.shake(clamp(rel / 30, 0.05, 0.5));
              this.player.takeDamage(rel * 0.12, v.position, 'traffic collision');
            }
            v.collisionCooldown = 0.5;
            other.collisionCooldown = 0.5;
          }
        }
      }
    }
  }

  /* ---------------- combat ---------------- */
  tryReload() {
    const p = this.player;
    if (!p || p.inVehicle || p.dead) return;
    if (p.reloading > 0) return;
    if (p.weapon.mag >= p.weapon.maxMag || p.weapon.reserve <= 0) return;
    p.reloading = 1.35;
    this.audio?.reload();
  }

  updateReload(dt) {
    const p = this.player;
    if (p.reloading > 0) {
      p.reloading -= dt;
      if (p.reloading <= 0) {
        const need = p.weapon.maxMag - p.weapon.mag;
        const take = Math.min(need, p.weapon.reserve);
        p.weapon.mag += take;
        p.weapon.reserve -= take;
      }
    }
    p.fireCooldown = Math.max(0, p.fireCooldown - dt);
  }

  handleCombat(dt) {
    const p = this.player;
    if (!p || p.dead) return;
    if (p.reloading > 0) return;
    if (!this.input.mouseDown) return;
    if (!this.autostart && document.pointerLockElement !== this.canvas) return;
    if (p.fireCooldown > 0) return;

    if (p.weapon.mag <= 0) {
      if (this.input.consumeMouse()) {
        this.audio?.ui();
        this.hud.toast('Out of ammo — press R to reload', '');
        this.tryReload();
      }
      return;
    }
    p.fireCooldown = 60 / p.weapon.rpm;
    p.weapon.mag--;
    p.aimTimer = 0.4;
    this.audio?.gunshot();
    this.shake(0.11);

    const origin = this.camera.position.clone();
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const raycaster = new THREE.Raycaster(origin, dir, 0, 220);
    const targets = [...this.city.shootables];
    for (const v of this.vehicles) {
      if (!v.destroyed && v !== p.inVehicle) targets.push(v.group);
    }
    for (const ped of this.peds) if (!ped.dead) targets.push(ped.group);
    for (const e of this.enemies) if (!e.dead) targets.push(e.group);

    const hits = raycaster.intersectObjects(targets, true);
    let end = origin.clone().addScaledVector(dir, 160);
    let hitPoint = null;
    if (hits.length) {
      const h = hits[0];
      hitPoint = h.point.clone();
      end = hitPoint;
      let obj = h.object;
      let actor = null, vehicle = null;
      while (obj) {
        if (obj.userData.actor) actor = obj.userData.actor;
        if (obj.userData.vehicle) vehicle = obj.userData.vehicle;
        obj = obj.parent;
      }
      if (actor) {
        if (actor === undefined) { /* noop */ }
        if (actor.hit) {
          const killed = actor.hit(p.weapon.damage, p.position);
          this.hud.hitMarker();
          if (actor.isPed && actor.dead) {
            this.hud.toast('Civilian down — cops alerted', 'pink');
          }
          this.effects?.blood(hitPoint, 4);
        }
      } else if (vehicle) {
        vehicle.damage(p.weapon.damage * 0.8, p.position);
        this.effects?.sparks(hitPoint, 8);
        this.hud.hitMarker();
      } else {
        this.effects?.sparks(hitPoint, 7, 0xffe2a0);
      }
    }

    // muzzle flash & tracer
    let muzzle;
    if (p.inVehicle) {
      const v = p.inVehicle;
      muzzle = new THREE.Vector3(v.position.x, v.position.y + 1.15, v.position.z).addScaledVector(new THREE.Vector3(Math.sin(v.heading), 0, Math.cos(v.heading)), v.spec.length * 0.42);
    } else {
      muzzle = new THREE.Vector3(p.position.x, p.position.y + 1.35, p.position.z)
        .addScaledVector(new THREE.Vector3(Math.sin(p.heading), 0, Math.cos(p.heading)), 0.55)
        .addScaledVector(new THREE.Vector3(Math.cos(p.heading), 0, -Math.sin(p.heading)), 0.28);
    }
    this.effects?.muzzle(muzzle, p.inVehicle ? 0.9 : 0.65);
    this.effects?.tracer(muzzle, end, 0xffe9a0);
    // alert nearby pedestrians
    for (const ped of this.peds) {
      if (!ped.dead && dist(ped.position, p.position) < 38) ped.alert(p.position);
    }
    // camera kick
    this.cameraPitch = clamp(this.cameraPitch + 0.006, -0.12, 0.78);
  }

  enemyShoot(enemy, target) {
    if (this.player.dead) return;
    const from = new THREE.Vector3(enemy.position.x, enemy.position.y + 1.35, enemy.position.z);
    const to = new THREE.Vector3(target.x, target.y + (target.y ? 1.2 : 1.2), target.z);
    if (this.player.inVehicle) to.copy(this.player.inVehicle.position).y += 1.1;
    else to.copy(this.player.position); to.y += 1.15;
    this.effects?.muzzle(from, 0.5);
    this.effects?.tracer(from, to, 0xff8a6b);
    this.audio?.gunshot('pistol');
    const d = dist(enemy.position, this.player.position);
    const hitChance = clamp(0.62 - d / 110, 0.15, 0.62);
    if (chance(hitChance)) {
      if (this.player.inVehicle && !this.player.inVehicle.destroyed) {
        this.player.inVehicle.damage(rand(3, 7));
        this.player.takeDamage(rand(2, 4), enemy.position, 'gunfire');
      } else {
        this.player.takeDamage(rand(5, 10), enemy.position, 'gunfire');
      }
      this.effects?.blood(this.player.position, 2);
    }
    this.shake(0.08);
  }

  policeShoot(car, target) {
    const from = new THREE.Vector3(car.position.x, car.position.y + 1.0, car.position.z);
    const to = new THREE.Vector3(target.x, target.y + 1.1, target.z);
    this.effects?.muzzle(from, 0.5);
    this.effects?.tracer(from, to, 0x8fc8ff);
    this.audio?.gunshot();
    if (chance(0.42)) {
      if (this.player.inVehicle && !this.player.inVehicle.destroyed) {
        this.player.inVehicle.damage(rand(4, 8));
        this.player.takeDamage(rand(2, 5), car.position, 'police');
      } else this.player.takeDamage(rand(4, 9), car.position, 'police');
      this.effects?.blood(this.player.position, 2);
    }
    this.shake(0.07);
  }

  hasLineOfSight(a, b) {
    const from = new THREE.Vector3(a.x, 1.4, a.z);
    const to = new THREE.Vector3(b.x, 1.3, b.z);
    const dir = to.clone().sub(from);
    const len = dir.length();
    if (len < 0.1) return true;
    dir.normalize();
    const ray = new THREE.Raycaster(from, dir, 0.1, len - 0.4);
    const hits = ray.intersectObjects(this.city.shootables, false);
    return hits.length === 0;
  }

  /* ---------------- damage / crime ---------------- */
  onPlayerDamaged(source) {
    this.hud.damage();
    if (this.shakeAmount < 0.2) this.shake(0.18);
  }

  crime(amount, reason) {
    if (this.deathState) return;
    this.wantedFloat = Math.min(5, this.wantedFloat + amount);
    const newWanted = Math.min(5, Math.ceil(this.wantedFloat));
    if (newWanted > this.wanted) {
      this.setWanted(newWanted);
      if (reason) this.hud.toast(`Wanted level up — ${reason}`, 'pink');
    }
    this.lastCrimeAt = this.elapsed;
    this.wantedDecay = 0;
  }

  setWanted(n, silent = false, force = false) {
    n = clamp(Math.round(n), 0, 5);
    if (n === this.wanted && !force) return;
    const increased = n > this.wanted;
    this.wanted = n;
    this.wantedFloat = n;
    this.lastCrimeAt = this.elapsed;
    this.wantedDecay = 0;
    if (!silent) {
      if (increased) this.audio?.wanted();
      if (n === 0) this.hud.toast('You lost the cops', 'gold');
    }
  }

  updateWanted(dt) {
    if (this.wanted <= 0) return;
    if (this.missions.active && this.missions.active.steps[this.missions.stepIndex]?.type === 'escape') return;
    const since = this.elapsed - this.lastCrimeAt;
    if (since > 26) {
      this.wantedDecay += dt;
      if (this.wantedDecay > 8) {
        this.wantedDecay = 0;
        this.lastCrimeAt = this.elapsed - 20;
        this.setWanted(this.wanted - 1, true);
        if (this.wanted === 0) this.hud.toast('You lost the cops', 'gold');
      }
    }
  }

  onPlayerDeath() {
    if (this.deathState) return;
    this.deathState = true;
    const p = this.player;
    if (p.inVehicle) {
      const v = p.inVehicle;
      const side = new THREE.Vector3(Math.cos(v.heading), 0, -Math.sin(v.heading)).multiplyScalar(2.2);
      p.inVehicle = null;
      v.driver = null;
      p.position.set(v.position.x + side.x, 0.2, v.position.z + side.z);
      p.group.visible = true;
    }
    this.missions.onPlayerDeath();
    this.setWanted(0, true, true);
    this.audio?.fail();
    this.hud.setPrompt(null);
    const loss = Math.min(this.money, 100 + Math.floor(this.money * 0.05));
    this.money -= loss;
    setTimeout(() => {
      this.hud.showDeath(loss, () => {
        p.respawn();
        this.deathState = false;
        this.cameraYaw = 0;
        this.cameraPitch = 0.02;
        this.setupCamera();
        this.hud.toast('Patched up. Back on the strip.', '');
      });
    }, 1500);
  }

  onEnemyKilled(e) {
    if (chance(0.4)) {
      const cash = randInt(80, 240);
      this.money += cash;
      this.hud.toast(`Pocketed ${formatMoney(cash)}`, 'gold');
      this.audio?.cash();
    }
  }

  onPedKilled() {
    this.crime(2, 'Civilian casualty');
  }

  onVehicleDestroyed(v) {
    if (v.driver === 'police' || v.driver === 'player') {
      if (v.driver === 'police') this.crime(2, 'Police cruiser destroyed');
    }
  }

  collectPickup(type) {
    const p = this.player;
    if (type === 'health') {
      p.health = Math.min(p.maxHealth, p.health + 35);
      this.hud.toast('Health +35', 'gold');
    } else if (type === 'armor') {
      p.armor = Math.min(p.maxArmor, p.armor + 50);
      this.hud.toast('Body armor +50', 'gold');
    } else if (type === 'ammo') {
      p.weapon.reserve += 36;
      this.hud.toast('Ammo +36', 'gold');
    } else if (type === 'cash') {
      const c = randInt(150, 400);
      this.money += c;
      this.hud.toast(`Found ${formatMoney(c)}`, 'gold');
    }
    this.audio?.pickup(type);
    this.effects?.sparks(new THREE.Vector3(p.position.x, p.position.y + 1.2, p.position.z), 12, 0x9dffb0);
  }

  cleanupCorpses() {
    for (const ped of this.peds) {
      if (ped.dead && ped.deathTimer > 12) ped.group.visible = false;
    }
    for (const e of this.enemies) {
      if (e.dead && e.deathTimer > 16) e.group.visible = false;
    }
  }

  removeVehicle(v) {
    const i = this.vehicles.indexOf(v);
    if (i >= 0) this.vehicles.splice(i, 1);
    if (v.group.parent) v.group.parent.remove(v.group);
    v.group.traverse(o => {
      if (o.geometry) o.geometry.dispose?.();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose?.());
        else o.material.dispose?.();
      }
    });
  }

  onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }
}

new Game();
