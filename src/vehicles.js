import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { CITY, clamp, damp, dampAngle, rand, randInt, choice, chance, dist, angleDiff, glowTexture } from './utils.js';

const CAR_TYPES = {
  stinger: { name: 'STINGER', length: 4.5, width: 1.98, bodyH: 0.42, cabinH: 0.46, cabinL: 1.9, maxSpeed: 42, accel: 16, color: 0xffd15c, sports: true },
  infernus: { name: 'INFERNUS', length: 4.55, width: 2.05, bodyH: 0.38, cabinH: 0.42, cabinL: 1.7, maxSpeed: 48, accel: 19, color: 0xff2d95, sports: true },
  cheetah: { name: 'CHEETAH', length: 4.6, width: 2.0, bodyH: 0.4, cabinH: 0.44, cabinL: 1.85, maxSpeed: 46, accel: 18, color: 0xffffff, sports: true },
  sedan: { name: 'OCEANIC', length: 4.4, width: 1.92, bodyH: 0.6, cabinH: 0.66, cabinL: 2.2, maxSpeed: 25, accel: 9, color: 0x3d8bd4 },
  taxi: { name: 'CABBIE', length: 4.4, width: 1.92, bodyH: 0.6, cabinH: 0.68, cabinL: 2.25, maxSpeed: 26, accel: 10, color: 0xffcf2e },
  van: { name: 'RUMPO', length: 5.2, width: 2.1, bodyH: 1.0, cabinH: 0.8, cabinL: 2.8, maxSpeed: 21, accel: 7, color: 0xe8e3d8 },
  pickup: { name: 'BOBCAT', length: 4.9, width: 2.0, bodyH: 0.62, cabinH: 0.62, cabinL: 1.8, maxSpeed: 26, accel: 10, color: 0x8c3e2e },
  police: { name: 'POLICE CRUISER', length: 4.5, width: 1.98, bodyH: 0.6, cabinH: 0.66, cabinL: 2.2, maxSpeed: 36, accel: 15, color: 0x101018, police: true },
};

const TRAFFIC_TYPES = ['sedan', 'sedan', 'taxi', 'van', 'pickup', 'stinger'];

export function createCarModel(typeKey, colorOverride) {
  const spec = CAR_TYPES[typeKey] || CAR_TYPES.sedan;
  const color = colorOverride ?? spec.color;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: 0.45, roughness: 0.32 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x15151b, metalness: 0.6, roughness: 0.4 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x0a1420, metalness: 0.9, roughness: 0.08, transparent: true, opacity: 0.92 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdfe6ea, metalness: 1, roughness: 0.15 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x0b0b0e, roughness: 0.9 });
  const hubMat = new THREE.MeshStandardMaterial({ color: 0xb9c2c8, metalness: 0.9, roughness: 0.25 });

  const L = spec.length, W = spec.width;
  const bodyY = spec.sports ? 0.52 : 0.62;
  const body = new THREE.Mesh(new RoundedBoxGeometry(W, spec.bodyH, L, 3, 0.18), bodyMat);
  body.position.y = bodyY;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // lower skirt / bumpers
  const skirt = new THREE.Mesh(new RoundedBoxGeometry(W + 0.04, 0.22, L * 0.98, 2, 0.08), trimMat);
  skirt.position.y = bodyY - spec.bodyH / 2 + 0.06;
  group.add(skirt);

  if (typeKey === 'van') {
    const cargo = new THREE.Mesh(new RoundedBoxGeometry(W - 0.08, 1.15, L * 0.62, 3, 0.12), bodyMat);
    cargo.position.set(0, bodyY + 0.55, -L * 0.16);
    cargo.castShadow = true;
    group.add(cargo);
  }

  // cabin
  const cabin = new THREE.Mesh(new RoundedBoxGeometry(W * 0.86, spec.cabinH, spec.cabinL, 3, 0.16), glassMat);
  cabin.position.set(0, bodyY + spec.bodyH / 2 + spec.cabinH / 2 - 0.04, spec.sports ? -0.3 : -0.1);
  cabin.castShadow = true;
  group.add(cabin);
  // roof
  const roof = new THREE.Mesh(new RoundedBoxGeometry(W * 0.8, 0.1, spec.cabinL * 0.9, 2, 0.05), bodyMat);
  roof.position.set(0, cabin.position.y + spec.cabinH / 2 + 0.02, cabin.position.z);
  group.add(roof);
  // pillars
  for (const sx of [-1, 1]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.07, spec.cabinH, 0.1), bodyMat);
    pillar.position.set(sx * W * 0.42, cabin.position.y, cabin.position.z + spec.cabinL * 0.45);
    group.add(pillar);
  }

  // lights
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff2c4, toneMapped: false });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2233, toneMapped: false });
  const headGeo = new THREE.BoxGeometry(0.4, 0.15, 0.08);
  const tailGeo = new THREE.BoxGeometry(0.45, 0.13, 0.07);
  for (const sx of [-1, 1]) {
    const h = new THREE.Mesh(headGeo, headMat);
    h.position.set(sx * W * 0.31, bodyY + 0.06, L / 2 + 0.01);
    group.add(h);
    const t = new THREE.Mesh(tailGeo, tailMat);
    t.position.set(sx * W * 0.32, bodyY + 0.08, -L / 2 - 0.01);
    group.add(t);
  }
  // grille
  const grille = new THREE.Mesh(new THREE.BoxGeometry(W * 0.5, 0.16, 0.06), chromeMat);
  grille.position.set(0, bodyY - 0.1, L / 2 + 0.02);
  group.add(grille);

  // wheels
  const wheels = [];
  const wheelGroups = [];
  const wheelGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.26, 14);
  wheelGeo.rotateZ(Math.PI / 2);
  const hubGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.28, 8);
  hubGeo.rotateZ(Math.PI / 2);
  const axleZ = spec.sports ? L * 0.31 : L * 0.32;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const wg = new THREE.Group();
      wg.position.set(sx * (W / 2 - 0.06), 0.36, sz * axleZ);
      const tire = new THREE.Mesh(wheelGeo, tireMat);
      tire.castShadow = true;
      wg.add(tire);
      const hub = new THREE.Mesh(hubGeo, hubMat);
      wg.add(hub);
      group.add(wg);
      wheels.push(tire);
      wheelGroups.push({ group: wg, front: sz > 0, sx });
    }
  }

  // taxi sign / police kit
  if (typeKey === 'taxi') {
    const signMat = new THREE.MeshBasicMaterial({ color: 0xfff0a0, toneMapped: false });
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.28, 0.32), signMat);
    sign.position.set(0, roof.position.y + 0.2, cabin.position.z);
    group.add(sign);
  }
  if (typeKey === 'police') {
    const white = new THREE.MeshStandardMaterial({ color: 0xe8e8f0, roughness: 0.4, metalness: 0.2 });
    for (const sx of [-1, 1]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.42, 1.5), white);
      door.position.set(sx * (W / 2 + 0.005), bodyY + 0.02, 0.1);
      group.add(door);
    }
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.14, 0.34), trimMat);
    bar.position.set(0, roof.position.y + 0.12, cabin.position.z);
    group.add(bar);
    const red = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.32), new THREE.MeshBasicMaterial({ color: 0xff1a2e, toneMapped: false }));
    red.position.set(-0.27, bar.position.y + 0.13, bar.position.z);
    group.add(red);
    const blue = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.32), new THREE.MeshBasicMaterial({ color: 0x1a6dff, toneMapped: false }));
    blue.position.set(0.27, bar.position.y + 0.13, bar.position.z);
    group.add(blue);
    group.userData.policeLights = { red, blue };
    // push bar
    const bull = new THREE.Mesh(new THREE.BoxGeometry(W * 0.8, 0.35, 0.12), trimMat);
    bull.position.set(0, bodyY - 0.05, L / 2 + 0.12);
    group.add(bull);
  }

  // driver silhouette (hidden for player)
  const driver = new THREE.Group();
  const dHead = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshStandardMaterial({ color: 0x8a5c3e, roughness: 0.8 }));
  dHead.position.y = 1.42;
  const dBody = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0x2a2a35, roughness: 0.9 }));
  dBody.position.y = 1.1;
  driver.add(dHead, dBody);
  driver.position.z = -0.1;
  group.add(driver);

  // underglow for sports
  if (spec.sports) {
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.9, L * 1.05), new THREE.MeshBasicMaterial({ map: glowTexture('#ff2d95', 0.08), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.5 }));
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.07;
    glow.raycast = () => {};
    group.add(glow);
    group.userData.underglow = glow;
  }

  group.userData.body = body;
  group.userData.driver = driver;
  group.userData.spec = spec;
  return { group, wheels, wheelGroups, driver, spec, bodyMat, headlights: headMat, taillights: tailMat };
}

/* ============================================================ */
export class Vehicle {
  constructor(game, type = 'sedan', pos = { x: 0, z: 0 }, heading = 0, color) {
    this.game = game;
    this.type = type;
    this.spec = CAR_TYPES[type] || CAR_TYPES.sedan;
    this.name = this.spec.name;
    this.model = createCarModel(type, color);
    this.group = this.model.group;
    this.position = new THREE.Vector3(pos.x, game.city.groundHeight(pos.x, pos.z), pos.z);
    this.heading = heading;
    this.speed = 0;
    this.steer = 0;
    this.driver = null; // 'player' | 'ai' | 'police' | null
    this.ai = null;
    this.health = 100;
    this.maxHealth = 100;
    this.radius = 1.55;
    this.destroyed = false;
    this.burnTimer = 0;
    this.collisionCooldown = 0;
    this.wheelSpin = 0;
    this.bodyTilt = 0;
    this.lastX = pos.x; this.lastZ = pos.z;
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.group.userData.vehicle = this;
    this.id = Math.random().toString(36).slice(2);
    game.scene.add(this.group);
  }

  get forward() { return new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading)); }

  setTrafficRoute() {
    // choose a road & direction
    const axis = chance(0.5) ? 'x' : 'z';
    const road = choice(CITY.roads);
    const dir = chance(0.5) ? 1 : -1;
    if (axis === 'x') {
      this.position.x = clamp(this.position.x, -190, 190);
      this.position.z = road + (dir > 0 ? -4.2 : 4.2);
      this.heading = dir > 0 ? Math.PI / 2 : -Math.PI / 2;
    } else {
      this.position.z = clamp(this.position.z, -190, 190);
      this.position.x = road + (dir > 0 ? 4.2 : -4.2);
      this.heading = dir > 0 ? 0 : Math.PI;
    }
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    const roadCoord = axis === 'x' ? this.position.z : this.position.x;
    const ni = CITY.roads.reduce((best, r, i) => Math.abs(r - roadCoord) < Math.abs(CITY.roads[best] - roadCoord) ? i : best, 0);
    const along = axis === 'x' ? this.position.x : this.position.z;
    let nextI = -1;
    if (dir > 0) {
      for (let i = 0; i < CITY.roads.length; i++) if (CITY.roads[i] > along + 5) { nextI = i; break; }
      if (nextI < 0) nextI = CITY.roads.length - 1;
    } else {
      for (let i = CITY.roads.length - 1; i >= 0; i--) if (CITY.roads[i] < along - 5) { nextI = i; break; }
      if (nextI < 0) nextI = 0;
    }
    this.ai = { kind: 'traffic', axis, dir, ni, nextI, cruise: rand(8, 14), stopped: 0, wobble: rand(0, 6) };
    this.targetPoint = this.computeAiTarget();
    this.applyTransform();
  }

  computeAiTarget() {
    const ai = this.ai;
    const road = CITY.roads[ai.ni];
    const nextRoad = CITY.roads[ai.nextI];
    if (ai.axis === 'x') {
      return new THREE.Vector3(nextRoad, 0, road + (ai.dir > 0 ? -4.2 : 4.2));
    }
    return new THREE.Vector3(road + (ai.dir > 0 ? 4.2 : -4.2), 0, nextRoad);
  }

  chooseNextNode() {
    const ai = this.ai;
    const oldNi = ai.ni;
    const oldNext = ai.nextI;
    const options = [];
    if (oldNext + ai.dir >= 0 && oldNext + ai.dir < CITY.roads.length) {
      options.push({ axis: ai.axis, dir: ai.dir, ni: oldNi, nextI: oldNext + ai.dir });
    }
    for (const turn of [-1, 1]) {
      const newNext = oldNi + turn;
      if (newNext >= 0 && newNext < CITY.roads.length) {
        options.push({ axis: ai.axis === 'x' ? 'z' : 'x', dir: turn, ni: oldNext, nextI: newNext });
      }
    }
    if (!options.length) {
      ai.dir *= -1;
      ai.nextI = clamp(oldNi + ai.dir, 0, CITY.roads.length - 1);
      this.targetPoint = this.computeAiTarget();
      return;
    }
    const straight = options.find(o => o.axis === ai.axis && o.dir === ai.dir);
    const pick = straight && chance(0.62) ? straight : choice(options);
    ai.axis = pick.axis;
    ai.dir = pick.dir;
    ai.ni = pick.ni;
    ai.nextI = pick.nextI;
    this.targetPoint = this.computeAiTarget();
  }

  applyTransform() {
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.group.rotation.z = this.bodyTilt;
  }

  update(dt, elapsed) {
    if (this.destroyed) {
      this.burnTimer += dt;
      this.group.position.y = this.position.y;
      return;
    }
    this.collisionCooldown = Math.max(0, this.collisionCooldown - dt);
    if (this.driver === 'player') this.updatePlayer(dt);
    else if (this.driver === 'police') this.updatePolice(dt);
    else if (this.driver === 'ai') this.updateTraffic(dt);
    else this.updateParked(dt);

    // wheel visuals
    this.wheelSpin += this.speed * dt / 0.36;
    for (const w of this.model.wheelGroups) {
      w.group.rotation.x = this.wheelSpin;
      if (w.front) w.group.rotation.y = this.steer * 0.5;
    }
    if (this.model.driver) this.model.driver.visible = !this.driver;
    this.applyTransform();

    // police lights
    if (this.group.userData.policeLights) {
      const p = this.group.userData.policeLights;
      const on = Math.sin(elapsed * 12) > 0;
      p.red.material.color.setHex(on ? 0xff2233 : 0x330008);
      p.blue.material.color.setHex(!on ? 0x2e7bff : 0x000a33);
    }
    if (this.group.userData.underglow) {
      this.group.userData.underglow.material.opacity = 0.38 + Math.sin(elapsed * 2 + this.position.x) * 0.12;
    }
    if (this.speed > 0.2 && this.model.taillights) {
      this.model.taillights.color.setHex(0xaa1122);
    }
  }

  updateParked(dt) {
    this.speed = 0;
    this.heading = dampAngle(this.heading, this.heading, 2, dt);
  }

  updateTraffic(dt) {
    const ai = this.ai;
    if (!ai) return;
    const target = this.targetPoint;
    const dx = target.x - this.position.x, dz = target.z - this.position.z;
    const d = Math.hypot(dx, dz);
    const desiredHeading = Math.atan2(dx, dz);
    const diff = angleDiff(this.heading, desiredHeading);
    this.heading = dampAngle(this.heading, desiredHeading, 3.4, dt);
    this.steer = damp(this.steer, clamp(diff * 1.4, -1, 1), 6, dt);

    let targetSpeed = ai.cruise;
    // turn slowdown
    if (Math.abs(diff) > 0.55) targetSpeed *= 0.45;
    // obstacle ahead
    const fwd = this.forward;
    const ahead = new THREE.Vector3(this.position.x + fwd.x * 6, 0, this.position.z + fwd.z * 6);
    let block = false;
    if (this.game.player && !this.game.player.inVehicle && dist(ahead, this.game.player.position) < 3.5) block = true;
    for (const v of this.game.vehicles) {
      if (v === this || v.destroyed) continue;
      if (dist(ahead, v.position) < 3.8 && v.speed < this.speed) { block = true; break; }
    }
    if (block) targetSpeed = 0;
    this.speed = damp(this.speed, targetSpeed, block ? 8 : 2.4, dt);

    const prev = this.position.clone();
    this.position.x += Math.sin(this.heading) * this.speed * dt;
    this.position.z += Math.cos(this.heading) * this.speed * dt;
    if (this.game.city.collide(this.position, this.radius)) {
      // back off and turn
      this.position.copy(prev);
      this.heading += 1.6 * dt;
      this.speed *= 0.4;
    }
    // when near target, pick next node (avoid bouncing)
    if (d < 6.5) this.chooseNextNode();
    // keep on ground
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);

    // player collisions
    this.game.vehicleWorldCollisions(this, dt);
    this.bodyTilt = damp(this.bodyTilt, -this.steer * this.speed * 0.004, 6, dt);
  }

  updatePolice(dt) {
    const player = this.game.player;
    const target = player.inVehicle ? player.inVehicle.position : player.position;
    const dx = target.x - this.position.x, dz = target.z - this.position.z;
    const d = Math.hypot(dx, dz);
    const desiredHeading = Math.atan2(dx, dz);
    const diff = angleDiff(this.heading, desiredHeading);
    this.heading = dampAngle(this.heading, desiredHeading, 2.6, dt);
    this.steer = damp(this.steer, clamp(diff * 1.2, -1, 1), 4, dt);

    let targetSpeed = d < 8 ? 2 : d < 25 ? 15 : 25;
    this.speed = damp(this.speed, targetSpeed, 1.8, dt);
    const prev = this.position.clone();
    this.position.x += Math.sin(this.heading) * this.speed * dt;
    this.position.z += Math.cos(this.heading) * this.speed * dt;
    if (this.game.city.collide(this.position, this.radius)) {
      this.position.copy(prev);
      this.speed *= 0.3;
      this.health -= 1;
    }
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    this.game.vehicleWorldCollisions(this, dt);

    // shoot at player when close
    if (d < 32 && this.collisionCooldown <= 0) {
      this.policeFireTimer = (this.policeFireTimer ?? 1) - dt;
      if (this.policeFireTimer <= 0) {
        this.policeFireTimer = rand(0.9, 1.8);
        if (this.game.hasLineOfSight(this.position, target)) this.game.policeShoot(this, target);
      }
    }
    this.bodyTilt = damp(this.bodyTilt, -this.steer * this.speed * 0.005, 6, dt);
  }

  updatePlayer(dt) {
    const inp = this.game.input;
    const throttle = (inp.isDown('KeyW') || inp.isDown('ArrowUp')) ? 1 : 0;
    const brake = (inp.isDown('KeyS') || inp.isDown('ArrowDown')) ? 1 : 0;
    const steerInput = ((inp.isDown('KeyA') || inp.isDown('ArrowLeft')) ? 1 : 0) - ((inp.isDown('KeyD') || inp.isDown('ArrowRight')) ? 1 : 0);
    const handbrake = inp.isDown('Space');
    const boost = inp.isDown('ShiftLeft') || inp.isDown('ShiftRight');

    const maxSpeed = this.spec.maxSpeed * (boost ? 1.14 : 1) * (this.health < 30 ? 0.75 : 1);
    let accel = this.spec.accel;
    if (throttle) {
      if (this.speed < 0) { this.speed += accel * 2.2 * dt; }
      else this.speed += accel * (boost ? 1.5 : 1) * dt;
    } else if (brake) {
      if (this.speed > 0.2) this.speed -= accel * 2.4 * dt;
      else this.speed -= accel * 0.55 * dt;
    } else {
      this.speed = damp(this.speed, 0, 0.6, dt);
    }
    if (handbrake) this.speed = damp(this.speed, 0, 3.5, dt);
    this.speed = clamp(this.speed, -maxSpeed * 0.28, maxSpeed);

    const steerTarget = steerInput * (handbrake ? 1.5 : 1);
    this.steer = damp(this.steer, steerTarget, 8, dt);
    const speedFactor = clamp(Math.abs(this.speed) / 9, 0, 1);
    const turnRate = 1.55 * speedFactor * (this.speed < 0 ? -1 : 1) * (handbrake ? 1.45 : 1);
    this.heading += this.steer * turnRate * dt;

    const prev = this.position.clone();
    this.position.x += Math.sin(this.heading) * this.speed * dt;
    this.position.z += Math.cos(this.heading) * this.speed * dt;

    let collided = this.game.city.collide(this.position, this.radius);
    if (collided) {
      const moved = Math.hypot(this.position.x - prev.x, this.position.z - prev.z);
      if (moved < Math.abs(this.speed) * dt * 0.5) {
        if (this.collisionCooldown <= 0) {
          const impact = Math.abs(this.speed);
          this.health -= impact * 0.7;
          this.game.player.takeDamage(impact * 0.45, this.position, 'crash');
          this.game.effects?.sparks(new THREE.Vector3((this.position.x + prev.x) / 2, this.position.y + 0.6, (this.position.z + prev.z) / 2), 12);
          this.game.audio?.crash(impact / 30);
          this.game.shake?.(clamp(impact / 40, 0, 0.6));
          this.collisionCooldown = 0.4;
        }
        this.speed *= -0.16;
      }
    }
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    this.game.vehicleWorldCollisions(this, dt);
    this.bodyTilt = damp(this.bodyTilt, -this.steer * this.speed * 0.0038, 5, dt);

    if (this.health <= 0) this.explode();
  }

  damage(amount, from) {
    if (this.destroyed) return;
    this.health -= amount;
    if (this.health <= 0) this.explode();
  }

  explode() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.speed = 0;
    this.game.effects?.explosion(new THREE.Vector3(this.position.x, this.position.y + 0.7, this.position.z));
    this.game.audio?.explosion();
    this.group.visible = false;
    if (this.game.player.inVehicle === this) {
      this.game.player.exitVehicle();
      this.game.player.takeDamage(35, this.position, 'explosion');
    }
    this.game.onVehicleDestroyed?.(this);
  }
}

/* ============================================================ */
export class TrafficManager {
  constructor(game, count = 22) {
    this.game = game;
    this.vehicles = [];
    this.count = count;
    this.spawnTimer = 0;
    this.spawnBatch();
  }

  randomRoadPos(minDistFromPlayer = 45) {
    for (let tries = 0; tries < 30; tries++) {
      const axis = chance(0.5) ? 'x' : 'z';
      const road = choice(CITY.roads);
      const along = rand(-215, 215);
      const x = axis === 'x' ? along : road;
      const z = axis === 'x' ? road : along;
      const p = this.game.player?.position || { x: 226, z: 142 };
      if (Math.hypot(x - p.x, z - p.z) > minDistFromPlayer) return { x, z };
    }
    return { x: rand(-180, 180), z: rand(-180, 180) };
  }

  spawnBatch() {
    for (let i = 0; i < this.count; i++) {
      let pos;
      if (i < 9) {
        const p = this.game.player.position;
        pos = { x: 200, z: clamp(p.z + rand(-130, 130), -210, 210) };
      } else {
        pos = this.randomRoadPos(55);
      }
      const type = chance(0.08) ? 'taxi' : choice(TRAFFIC_TYPES);
      const v = new Vehicle(this.game, type, pos, rand(0, Math.PI * 2), chance(0.5) ? undefined : choice([0xf2e8d5, 0x2e5d8c, 0x8c3e2e, 0x2f6b3e, 0x6b4a82, 0x1f1f24]));
      v.driver = 'ai';
      v.setTrafficRoute();
      this.vehicles.push(v);
      this.game.vehicles.push(v);
    }
  }

  update(dt, elapsed) {
    for (const v of this.vehicles) {
      if (v.destroyed) continue;
      if (dist(v.position, this.game.player.position) > 260) {
        const p = this.randomRoadPos(90);
        v.position.set(p.x, 0, p.z);
        v.destroyed = false;
        v.health = 100;
        v.group.visible = true;
        v.driver = 'ai';
        v.setTrafficRoute();
      }
    }
  }
}

/* ============================================================ */
export class PoliceManager {
  constructor(game) {
    this.game = game;
    this.cars = [];
    this.spawnTimer = 0;
  }

  update(dt, wanted) {
    if (wanted <= 0) {
      for (const c of this.cars) this.game.removeVehicle(c);
      this.cars = [];
      return;
    }
    const targetCount = Math.min(5, Math.ceil(wanted * 1.3));
    this.spawnTimer -= dt;
    if (this.cars.filter(c => !c.destroyed).length < targetCount && this.spawnTimer <= 0) {
      this.spawnTimer = 2.4;
      this.spawnCar();
    }
    for (const c of this.cars) {
      if (!c.destroyed && dist(c.position, this.game.player.position) > 330) {
        c.position.set(this.game.player.position.x + rand(-80, 80), 0, this.game.player.position.z + rand(-80, 80));
        c.position.y = 0.1;
        c.heading = rand(0, Math.PI * 2);
      }
    }
    for (const c of this.cars) {
      if (c.destroyed) this.game.removeVehicle(c);
    }
    this.cars = this.cars.filter(c => !c.destroyed);
  }

  spawnCar() {
    const p = this.game.player.position;
    const ang = rand(0, Math.PI * 2);
    const r = rand(80, 120);
    let x = clamp(p.x + Math.cos(ang) * r, -225, 225);
    let z = clamp(p.z + Math.sin(ang) * r, -225, 225);
    // snap to nearest road
    const nearest = CITY.roads.reduce((a, b) => Math.abs(b - x) < Math.abs(a - x) ? b : a, 0);
    if (chance(0.5)) x = nearest; else z = nearest;
    const v = new Vehicle(this.game, 'police', { x, z }, rand(0, Math.PI * 2));
    v.driver = 'police';
    v.health = 140;
    v.maxHealth = 140;
    this.cars.push(v);
    this.game.vehicles.push(v);
  }
}
