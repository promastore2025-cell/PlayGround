import * as THREE from 'three';
import { rand, randInt, choice, glowTexture, canvasTexture, clamp } from './utils.js';

export class Effects {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.particles = [];
    this.capacity = 700;
    this.geo = new THREE.BufferGeometry();
    this.positions = new Float32Array(this.capacity * 3);
    this.colors = new Float32Array(this.capacity * 3);
    this.sizes = new Float32Array(this.capacity);
    for (let i = 0; i < this.capacity; i++) {
      this.positions[i * 3 + 1] = -1000;
      this.particles.push({ alive: false, vel: new THREE.Vector3(), life: 0, max: 0, grav: 0, drag: 1, color: new THREE.Color() });
    }
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.16, vertexColors: true, transparent: true, opacity: 0.95,
      depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(this.geo, mat);
    this.points.frustumCulled = false;
    this.scene.add(this.points);
    this.cursor = 0;

    this.tracers = [];
    for (let i = 0; i < 24; i++) {
      const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      const mat = new THREE.LineBasicMaterial({ color: 0xfff0a0, transparent: true, opacity: 0, depthWrite: false });
      const line = new THREE.Line(geo, mat);
      line.frustumCulled = false;
      this.scene.add(line);
      this.tracers.push({ line, life: 0 });
    }
    this.tracerCursor = 0;

    this.flashes = [];
    const flashTex = glowTexture('#ffdc8a', 0.08);
    for (let i = 0; i < 8; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, color: 0xffd9a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }));
      s.visible = false;
      this.scene.add(s);
      this.flashes.push({ sprite: s, life: 0 });
    }
    this.flashCursor = 0;

    this.rings = [];
    this.pickups = [];
    this.markers = [];
    this.setupPickups();
  }

  /* ---------- particles ---------- */
  spawn(pos, vel, life, color, grav = 0, drag = 1) {
    const p = this.particles[this.cursor];
    this.cursor = (this.cursor + 1) % this.capacity;
    p.alive = true;
    p.life = life; p.max = life;
    p.vel.copy(vel);
    p.grav = grav; p.drag = drag;
    p.color.set(color);
    this.positions[p.index ?? (p.index = 0)] = 0; // noop
    const idx = (this.cursor - 1 + this.capacity) % this.capacity;
    p.i = idx;
    this.positions[idx * 3] = pos.x;
    this.positions[idx * 3 + 1] = pos.y;
    this.positions[idx * 3 + 2] = pos.z;
    this.colors[idx * 3] = p.color.r;
    this.colors[idx * 3 + 1] = p.color.g;
    this.colors[idx * 3 + 2] = p.color.b;
  }

  sparks(pos, n = 10, color = 0xffc84a) {
    for (let i = 0; i < n; i++) {
      this.spawn(pos, new THREE.Vector3(rand(-4, 4), rand(1, 6), rand(-4, 4)), rand(0.25, 0.7), color, 14, 0.94);
    }
  }

  blood(pos, n = 8) {
    for (let i = 0; i < n; i++) {
      this.spawn(new THREE.Vector3(pos.x, pos.y + 1.1, pos.z),
        new THREE.Vector3(rand(-1.8, 1.8), rand(0.4, 3.2), rand(-1.8, 1.8)),
        rand(0.3, 0.65), new THREE.Color(0.7, 0.05, 0.09), 12, 0.9);
    }
  }

  dust(pos, n = 3) {
    for (let i = 0; i < n; i++) {
      this.spawn(new THREE.Vector3(pos.x + rand(-.4, .4), pos.y + 0.08, pos.z + rand(-.4, .4)),
        new THREE.Vector3(rand(-.5, .5), rand(.2, .8), rand(-.5, .5)),
        rand(0.4, 0.9), new THREE.Color(0.55, 0.5, 0.44), -0.2, 0.92);
    }
  }

  smoke(pos, n = 10, color = 0x444444) {
    for (let i = 0; i < n; i++) {
      this.spawn(new THREE.Vector3(pos.x + rand(-1, 1), pos.y + rand(0, 1.5), pos.z + rand(-1, 1)),
        new THREE.Vector3(rand(-1.2, 1.2), rand(1, 3.5), rand(-1.2, 1.2)),
        rand(0.8, 1.8), color, -0.6, 0.92);
    }
  }

  explosion(pos) {
    this.sparks(pos, 60, 0xff9a3c);
    this.smoke(pos, 40, 0x2a2522);
    for (let i = 0; i < 20; i++) this.spawn(pos, new THREE.Vector3(rand(-6, 6), rand(2, 10), rand(-6, 6)), rand(.4, 1.1), 0xff5a1f, 10, 0.94);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 1.2, 24), new THREE.MeshBasicMaterial({ color: 0xffb45c, transparent: true, opacity: 0.9, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(pos);
    ring.position.y += 0.1;
    this.scene.add(ring);
    this.rings.push({ mesh: ring, life: 0.9, max: 0.9, kind: 'explosion' });
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('#ffb45c', 0.1), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 1 }));
    s.position.copy(pos);
    s.scale.setScalar(4);
    this.scene.add(s);
    this.rings.push({ mesh: s, life: 0.5, max: 0.5, kind: 'flash' });
    this.game.shake?.(1.2);
  }

  tracer(from, to, color = 0xfff0a0, width = 1) {
    const t = this.tracers[this.tracerCursor];
    this.tracerCursor = (this.tracerCursor + 1) % this.tracers.length;
    const arr = t.line.geometry.attributes.position;
    arr.setXYZ(0, from.x, from.y, from.z);
    arr.setXYZ(1, to.x, to.y, to.z);
    arr.needsUpdate = true;
    t.line.material.color.setHex(color);
    t.line.material.opacity = 0.95;
    t.life = 0.08;
  }

  muzzle(pos, scale = 0.7) {
    const f = this.flashes[this.flashCursor];
    this.flashCursor = (this.flashCursor + 1) % this.flashes.length;
    f.sprite.position.copy(pos);
    f.sprite.scale.setScalar(scale);
    f.sprite.material.opacity = 1;
    f.sprite.visible = true;
    f.life = 0.06;
  }

  update(dt) {
    // particles
    for (let i = 0; i < this.capacity; i++) {
      const p = this.particles[i];
      if (!p.alive) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.alive = false;
        this.positions[i * 3 + 1] = -1000;
        continue;
      }
      const idx = p.i;
      p.vel.y -= p.grav * dt;
      p.vel.multiplyScalar(Math.pow(p.drag, dt * 60));
      this.positions[idx * 3] += p.vel.x * dt;
      this.positions[idx * 3 + 1] += p.vel.y * dt;
      this.positions[idx * 3 + 2] += p.vel.z * dt;
      const fade = clamp(p.life / p.max, 0, 1);
      this.colors[idx * 3] = p.color.r * fade;
      this.colors[idx * 3 + 1] = p.color.g * fade;
      this.colors[idx * 3 + 2] = p.color.b * fade;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    for (const t of this.tracers) {
      if (t.life > 0) {
        t.life -= dt;
        t.line.material.opacity = Math.max(0, t.life / 0.08) * 0.9;
      } else t.line.material.opacity = 0;
    }
    for (const f of this.flashes) {
      if (f.life > 0) {
        f.life -= dt;
        f.sprite.material.opacity = Math.max(0, f.life / 0.06);
        if (f.life <= 0) f.sprite.visible = false;
      }
    }
    for (const r of this.rings) {
      r.life -= dt;
      const k = 1 - Math.max(0, r.life) / r.max;
      if (r.kind === 'explosion') {
        r.mesh.scale.setScalar(1 + k * 8);
        r.mesh.material.opacity = (1 - k) * 0.9;
      } else {
        r.mesh.scale.setScalar(4 + k * 18);
        r.mesh.material.opacity = (1 - k);
      }
      if (r.life <= 0) this.scene.remove(r.mesh);
    }
    this.rings = this.rings.filter(r => r.life > 0);

    // pickups / markers
    for (const p of this.pickups) p.update?.(dt, this.game);
    for (const m of this.markers) m.update?.(dt, this.game);
  }

  /* ---------- pickups ---------- */
  setupPickups() {
    const spots = [
      { x: 222, z: 132, type: 'health' },
      { x: 222, z: 118, type: 'armor' },
      { x: 208, z: 12, type: 'ammo' },
      { x: 12, z: 208, type: 'health' },
      { x: -108, z: -8, type: 'armor' },
      { x: -8, z: -108, type: 'ammo' },
      { x: 108, z: 108, type: 'cash' },
      { x: -208, z: 108, type: 'health' },
      { x: -108, z: 208, type: 'ammo' },
      { x: 108, z: -208, type: 'armor' },
      { x: 208, z: 100, type: 'cash' },
      { x: 8, z: -8, type: 'health' },
    ];
    for (const s of spots) this.addPickup(s);
  }

  addPickup({ x, z, type }) {
    const group = new THREE.Group();
    const y = this.game.city.groundHeight(x, z) + 1.1;
    group.position.set(x, y, z);
    const color = type === 'health' ? 0x38ef7d : type === 'armor' ? 0x40c4ff : type === 'ammo' ? 0xffd15c : 0x7dff8e;
    let icon;
    if (type === 'health') {
      icon = new THREE.Group();
      const m = new THREE.MeshBasicMaterial({ color, toneMapped: false });
      const a = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.22, 0.16), m);
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.66, 0.16), m);
      icon.add(a, b);
    } else if (type === 'armor') {
      icon = new THREE.Mesh(new THREE.OctahedronGeometry(0.42), new THREE.MeshBasicMaterial({ color, toneMapped: false, wireframe: false }));
    } else if (type === 'ammo') {
      icon = new THREE.Group();
      const m = new THREE.MeshBasicMaterial({ color, toneMapped: false });
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.46, 0.3), m);
      icon.add(box);
    } else {
      const tex = canvasTexture(128, 64, (ctx, w, h) => {
        ctx.fillStyle = '#0b3d16'; ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = color; ctx.font = 'bold 50px "Courier New"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('$', w / 2, h / 2 + 3);
      });
      icon = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.42, 0.12), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    }
    group.add(icon);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.75, 24), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.95;
    group.add(ring);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.5, 4.2, 20, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.035, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    beam.position.y = 1.1;
    group.add(beam);
    this.scene.add(group);
    const p = {
      group, type, active: true, respawn: 0, base: group.position.clone(), t: rand(0, 6),
      update: (dt, game) => {
        p.t += dt;
        if (!p.active) {
          p.respawn -= dt;
          if (p.respawn <= 0) { p.active = true; group.visible = true; }
          return;
        }
        group.position.y = p.base.y + Math.sin(p.t * 2) * 0.16;
        icon.rotation.y += dt * 1.8;
        group.children[0].rotation.y = p.t * 1.8;
        group.rotation.y = 0;
        const pp = game.player.position;
        if (Math.hypot(pp.x - group.position.x, pp.z - group.position.z) < 2.2 && Math.abs(pp.y - group.position.y) < 4) {
          p.active = false;
          p.respawn = 35;
          group.visible = false;
          game.collectPickup(type);
        }
      },
    };
    this.pickups.push(p);
  }

  /* ---------- world markers ---------- */
  addMarker(pos, { color = 0xff2d95, label = 'M', radius = 2.2, beam = true } = {}) {
    const effects = this;
    const group = new THREE.Group();
    const y = this.game.city.groundHeight(pos.x, pos.z);
    group.position.set(pos.x, y + 0.06, pos.z);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.09, 8, 40), new THREE.MeshBasicMaterial({ color, toneMapped: false, transparent: true, opacity: 0.9 }));
    ring.rotation.x = -Math.PI / 2;
    group.add(ring);
    const inner = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.9, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.15, side: THREE.DoubleSide, depthWrite: false }));
    inner.rotation.x = -Math.PI / 2;
    group.add(inner);
    if (beam) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.16, radius * 0.8, 8, 24, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.05, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
      b.position.y = 4.5;
      group.add(b);
    }
    // label sprite
    const tex = canvasTexture(128, 128, (ctx, w, h) => {
      ctx.fillStyle = 'rgba(0,0,0,0)'; ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(64, 64, 42, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 58px "Arial Black"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(label, 64, 68);
    });
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color, transparent: true, depthWrite: false, toneMapped: false }));
    sprite.scale.setScalar(1.5);
    sprite.position.y = 3.2;
    group.add(sprite);
    this.scene.add(group);
    const m = {
      group, pos: new THREE.Vector3(pos.x, y, pos.z), radius, color, active: true, t: 0,
      setVisible(v) { group.visible = v; m.active = v; },
      setPosition(p) {
        const gy = effects.game.city.groundHeight(p.x, p.z);
        m.pos.set(p.x, gy, p.z);
        group.position.set(p.x, gy + 0.06, p.z);
      },
      dispose() {
        effects.scene.remove(group);
        group.traverse(o => { if (o.geometry) o.geometry.dispose?.(); });
        m.disposed = true;
      },
      update(dt) {
        m.t += dt;
        ring.rotation.z += dt * 0.7;
        const s = 1 + Math.sin(m.t * 3) * 0.05;
        group.scale.set(s, 1, s);
        sprite.position.y = 3.2 + Math.sin(m.t * 2) * 0.12;
      },
    };
    this.markers.push(m);
    return m;
  }
}
