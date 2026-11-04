import * as THREE from 'three';
import { clamp, damp, dampAngle, rand, randInt, choice, chance, dist, angleDiff } from './utils.js';

const SKINS = [0xc98d6b, 0xe0ab85, 0x8d5c3f, 0xf0c8a0, 0x6b422e, 0xdc9f7a];
const SHIRTS = [0xff7eb6, 0x4fd1c5, 0xffd166, 0xf4f1de, 0x9b5de5, 0xff6b6b, 0x3a86ff, 0xf2a65a, 0xb8f2e6];
const PANTS = [0x2b2d42, 0x5c4d3c, 0x1b263b, 0xd8d8d8, 0x3d405b, 0x242423];

function mat(color, rough = 0.8, metal = 0.05) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
}

export function createHuman({ shirt, pants, skin, hair = 0x201812, shades = false, cap = null, shoes = 0x1a1a1a, tie = null } = {}) {
  shirt = shirt ?? choice(SHIRTS);
  pants = pants ?? choice(PANTS);
  skin = skin ?? choice(SKINS);

  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  const skinMat = mat(skin, 0.75);
  const shirtMat = mat(shirt, 0.78);
  const pantsMat = mat(pants, 0.85);
  const shoeMat = mat(shoes, 0.5, 0.1);

  // hips & torso
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.44, 4, 10), shirtMat);
  torso.position.y = 1.19;
  torso.scale.set(1.08, 1, 0.72);
  torso.castShadow = true;
  body.add(torso);
  const belly = new THREE.Mesh(new THREE.CapsuleGeometry(0.23, 0.16, 4, 10), shirtMat);
  belly.position.y = 0.96;
  belly.scale.set(1.05, 1, 0.75);
  body.add(belly);

  // neck + head
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.13, 8), skinMat);
  neck.position.y = 1.52;
  body.add(neck);
  const head = new THREE.Group();
  head.position.y = 1.65;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.185, 14, 12), skinMat);
  skull.scale.set(0.9, 1.08, 0.95);
  skull.castShadow = true;
  head.add(skull);
  // nose
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.1, 5), skinMat);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.01, 0.18);
  head.add(nose);
  // hair
  const hairMat = mat(hair, 0.95);
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.192, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.58), hairMat);
  hairCap.position.y = 0.015;
  hairCap.scale.set(0.93, 1.06, 0.98);
  head.add(hairCap);
  if (cap) {
    const capMat = mat(cap, 0.8);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), capMat);
    dome.position.y = 0.055; head.add(dome);
    const brim = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.035, 0.19), capMat);
    brim.position.set(0, 0.06, 0.17); head.add(brim);
  }
  if (shades) {
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.075, 0.04), new THREE.MeshStandardMaterial({ color: 0x0b0b12, metalness: 0.7, roughness: 0.15 }));
    glass.position.set(0, 0.035, 0.175);
    head.add(glass);
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.03), mat(0x0b0b12, 0.2, 0.8));
    bridge.position.set(0, 0.07, 0.18); head.add(bridge);
  }
  if (tie) {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.32, 0.03), mat(tie, 0.5));
    t.position.set(0, 1.22, 0.19); body.add(t);
  }

  // arms
  const armL = new THREE.Group();
  armL.position.set(-0.34, 1.4, 0);
  body.add(armL);
  const upperL = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.34, 3, 8), shirtMat);
  upperL.position.y = -0.2; upperL.castShadow = true; armL.add(upperL);
  const handL = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), skinMat);
  handL.position.y = -0.44; armL.add(handL);

  const armR = new THREE.Group();
  armR.position.set(0.34, 1.4, 0);
  body.add(armR);
  const upperR = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.34, 3, 8), shirtMat);
  upperR.position.y = -0.2; upperR.castShadow = true; armR.add(upperR);
  const handR = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), skinMat);
  handR.position.y = -0.44; armR.add(handR);

  // legs
  const legL = new THREE.Group();
  legL.position.set(-0.14, 0.92, 0);
  body.add(legL);
  const thighL = new THREE.Mesh(new THREE.CapsuleGeometry(0.098, 0.55, 3, 8), pantsMat);
  thighL.position.y = -0.34; thighL.castShadow = true; legL.add(thighL);
  const shoeL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.3), shoeMat);
  shoeL.position.set(0, -0.88, 0.05); legL.add(shoeL);

  const legR = new THREE.Group();
  legR.position.set(0.14, 0.92, 0);
  body.add(legR);
  const thighR = new THREE.Mesh(new THREE.CapsuleGeometry(0.098, 0.55, 3, 8), pantsMat);
  thighR.position.y = -0.34; thighR.castShadow = true; legR.add(thighR);
  const shoeR = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.3), shoeMat);
  shoeR.position.set(0, -0.88, 0.05); legR.add(shoeR);

  const allMeshes = [];
  group.traverse(o => { if (o.isMesh) { o.userData.human = group; allMeshes.push(o); } });

  return { group, body, head, armL, armR, legL, legR, torso, allMeshes, handR };
}

export function animateHuman(h, t, speed, opts = {}) {
  const moving = speed > 0.25;
  const amp = clamp(speed / 7, 0, 1.2);
  const cycle = t * (4.2 + speed * 0.85);
  if (opts.aim) {
    h.armR.rotation.x = damp(h.armR.rotation.x, -1.45, 12, 0.016);
    h.armR.rotation.z = damp(h.armR.rotation.z, 0.12, 12, 0.016);
    h.armL.rotation.x = damp(h.armL.rotation.x, -0.3, 10, 0.016);
  } else if (moving) {
    h.armL.rotation.x = damp(h.armL.rotation.x, Math.sin(cycle) * 0.75 * amp, 14, 0.016);
    h.armR.rotation.x = damp(h.armR.rotation.x, -Math.sin(cycle) * 0.75 * amp, 14, 0.016);
  } else {
    h.armL.rotation.x = damp(h.armL.rotation.x, Math.sin(t * 1.6) * 0.05, 4, 0.016);
    h.armR.rotation.x = damp(h.armR.rotation.x, -Math.sin(t * 1.6) * 0.05, 4, 0.016);
  }
  h.armL.rotation.z = damp(h.armL.rotation.z, 0.07, 6, 0.016);
  h.armR.rotation.z = damp(h.armR.rotation.z, -0.07, 6, 0.016);
  if (moving) {
    h.legL.rotation.x = Math.sin(cycle) * 0.68 * amp;
    h.legR.rotation.x = -Math.sin(cycle) * 0.68 * amp;
    h.body.position.y = Math.abs(Math.sin(cycle)) * 0.045 * amp;
  } else {
    h.legL.rotation.x = damp(h.legL.rotation.x, 0, 8, 0.016);
    h.legR.rotation.x = damp(h.legR.rotation.x, 0, 8, 0.016);
    h.body.position.y = damp(h.body.position.y, 0, 8, 0.016);
  }
  h.body.rotation.z = damp(h.body.rotation.z, moving ? Math.sin(cycle) * 0.025 : 0, 8, 0.016);
}

/* ============================================================ */
export class Player {
  constructor(game) {
    this.game = game;
    this.mesh = createHuman({
      shirt: 0xf2ede2, pants: 0xf1ead9, skin: 0xd9a077, hair: 0x1b1410,
      shades: true, shoes: 0x2b2118, tie: 0x1b1a24,
    });
    this.group = this.mesh.group;
    this.position = new THREE.Vector3(215, 0.23, 128);
    this.velocity = new THREE.Vector3();
    this.heading = Math.PI;
    this.vy = 0;
    this.onGround = true;
    this.health = 100;
    this.maxHealth = 100;
    this.armor = 0;
    this.maxArmor = 100;
    this.radius = 0.42;
    this.inVehicle = null;
    this.weapon = { name: 'PISTOL', mag: 12, reserve: 60, maxMag: 12, damage: 28, rpm: 320, auto: false };
    this.reloading = 0;
    this.fireCooldown = 0;
    this.speed = 0;
    this.aimTimer = 0;
    this.dead = false;
    this.shootAnim = 0;
    this.stepOffset = 0;
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.group.userData.actor = this;
    this.isPlayer = true;
    game.scene.add(this.group);
  }

  get pos() { return this.position; }

  reset(pos) {
    this.position.set(pos.x, this.game.city.groundHeight(pos.x, pos.z), pos.z);
    this.velocity.set(0, 0, 0);
    this.health = 100; this.armor = 0; this.dead = false;
    this.mesh.group.rotation.set(0, 0, 0);
    this.mesh.body.rotation.set(0, 0, 0);
    this.mesh.body.position.y = 0;
    this.mesh.group.visible = true;
  }

  update(dt) {
    if (this.dead) return;
    if (this.inVehicle) { this.updateInVehicle(dt); return; }
    const inp = this.game.input;
    const camYaw = this.game.cameraYaw;

    let fwd = 0, strafe = 0;
    if (inp.isDown('KeyW') || inp.isDown('ArrowUp')) fwd += 1;
    if (inp.isDown('KeyS') || inp.isDown('ArrowDown')) fwd -= 1;
    if (inp.isDown('KeyD') || inp.isDown('ArrowRight')) strafe += 1;
    if (inp.isDown('KeyA') || inp.isDown('ArrowLeft')) strafe -= 1;

    const sprint = inp.isDown('ShiftLeft') || inp.isDown('ShiftRight');
    const targetSpeed = sprint ? 9.4 : 5.4;
    const dir = new THREE.Vector3(
      -Math.sin(camYaw) * fwd + Math.cos(camYaw) * strafe, 0,
      -Math.cos(camYaw) * fwd - Math.sin(camYaw) * strafe,
    );
    const moving = dir.lengthSq() > 0.01;
    if (moving) dir.normalize();
    const desired = moving ? dir.multiplyScalar(targetSpeed) : new THREE.Vector3();
    this.velocity.x = damp(this.velocity.x, desired.x, moving ? 12 : 14, dt);
    this.velocity.z = damp(this.velocity.z, desired.z, moving ? 12 : 14, dt);
    this.speed = Math.hypot(this.velocity.x, this.velocity.z);

    if (moving && this.speed > 0.3) {
      const targetHeading = Math.atan2(this.velocity.x, this.velocity.z);
      this.heading = dampAngle(this.heading, targetHeading, 14, dt);
    }

    // jump / gravity
    if (inp.consume('Space') && this.onGround) {
      this.vy = 6.2;
      this.onGround = false;
      this.game.audio?.jump();
    }
    this.vy -= 20 * dt;
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.vy * dt;

    this.game.city.collide(this.position, this.radius);
    const ground = this.game.city.groundHeight(this.position.x, this.position.z);
    if (this.position.y <= ground) {
      this.position.y = ground;
      this.vy = 0;
      this.onGround = true;
    }

    // moving vehicle push
    for (const v of this.game.vehicles) {
      if (v === this.inVehicle || v.destroyed) continue;
      const d = Math.hypot(v.position.x - this.position.x, v.position.z - this.position.z);
      if (d < 2.1 && Math.abs(v.speed) > 3) {
        const push = new THREE.Vector3(this.position.x - v.position.x, 0, this.position.z - v.position.z).normalize();
        this.position.x += push.x * 0.6;
        this.position.z += push.z * 0.6;
        this.game.player.takeDamage(Math.abs(v.speed) * 1.1, v.position, 'traffic');
        this.vy = 3.5;
      }
    }

    // animation
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    const aim = inp.mouseDown && this.fireCooldown > 0;
    animateHuman(this.mesh, this.game.elapsed, this.speed, { aim: this.aimTimer > 0.15 });
    if (this.aimTimer > 0) this.aimTimer -= dt;

    // walk dust
    if (this.speed > 3 && this.onGround) {
      this.stepOffset -= this.speed * dt;
      if (this.stepOffset < 0) {
        this.stepOffset = 2.4;
        this.game.effects?.dust(this.position, 0.5);
      }
    }

    // out of world safety
    if (this.position.y < -6) this.reset({ x: 215, z: 128 });
  }

  updateInVehicle(dt) {
    const v = this.inVehicle;
    this.position.copy(v.position);
    this.position.y = v.position.y;
    this.group.visible = false;
    this.speed = Math.abs(v.speed);
  }

  enterVehicle(v) {
    if (!v || v.destroyed) return;
    this.inVehicle = v;
    v.driver = 'player';
    v.ai = null;
    v.speed = Math.max(v.speed, 0);
    this.group.visible = false;
    this.game.playerEnteredVehicle(v);
  }

  exitVehicle() {
    const v = this.inVehicle;
    if (!v) return;
    const side = new THREE.Vector3(Math.cos(v.heading), 0, -Math.sin(v.heading)).multiplyScalar(2.1);
    this.position.set(v.position.x + side.x, v.position.y + 0.6, v.position.z + side.z);
    this.game.city.collide(this.position, this.radius);
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    this.inVehicle = null;
    this.group.visible = true;
    this.velocity.set(0, 0, 0);
    this.heading = v.heading;
    v.driver = null;
    v.speed *= 0.2;
    this.game.playerExitedVehicle(v);
  }

  takeDamage(amount, from, source = 'unknown') {
    if (this.dead) return;
    let dmg = amount;
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.65);
      this.armor -= absorbed;
      dmg -= absorbed;
    }
    this.health = Math.max(0, this.health - dmg);
    this.game.onPlayerDamaged?.(source, from);
    this.game.audio?.hurt();
    if (this.health <= 0) this.die();
  }

  die() {
    this.dead = true;
    this.mesh.body.rotation.z = Math.PI / 2;
    this.mesh.body.position.y = 0.2;
    this.game.onPlayerDeath?.();
  }

  respawn() {
    this.reset({ x: 215, z: 128 });
    this.health = 100;
    this.armor = 0;
    this.mesh.group.rotation.set(0, this.heading, 0);
    this.mesh.body.rotation.set(0, 0, 0);
    this.mesh.body.position.y = 0;
    this.group.visible = true;
  }
}

/* ============================================================ */
export class Ped {
  constructor(game, pos) {
    this.game = game;
    this.mesh = createHuman({
      shirt: choice(SHIRTS), pants: choice(PANTS), skin: choice(SKINS),
      hair: choice([0x1b1410, 0x3d2b1f, 0x101010, 0x6b4b2a, 0xc9a56a]),
      shades: chance(0.2), cap: chance(0.18) ? choice([0xff2d95, 0x22e5ec, 0x222222, 0xffd15c]) : null,
    });
    this.group = this.mesh.group;
    this.position = new THREE.Vector3(pos.x, game.city.groundHeight(pos.x, pos.z), pos.z);
    this.heading = rand(0, Math.PI * 2);
    this.speed = rand(1.1, 1.8);
    this.baseSpeed = this.speed;
    this.state = 'walk';
    this.fleeTimer = 0;
    this.target = this.pickTarget();
    this.dead = false;
    this.health = 24;
    this.radius = 0.4;
    this.animT = rand(0, 10);
    this.fall = 0;
    this.deathTimer = 0;
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.group.userData.actor = this;
    this.isPed = true;
    game.scene.add(this.group);
  }

  pickTarget() {
    const c = this.game.city;
    // choose a point on sidewalk near current location or beach promenade
    if (chance(0.3)) return { x: rand(212, 234), z: clamp(this.position.z + rand(-40, 40), -225, 225) };
    const block = choice(c.blocks);
    const side = randInt(0, 3);
    let x, z;
    if (side === 0) { x = block.cx + rand(-38, 38); z = block.cz - 38; }
    else if (side === 1) { x = block.cx + rand(-38, 38); z = block.cz + 38; }
    else if (side === 2) { x = block.cx - 38; z = block.cz + rand(-38, 38); }
    else { x = block.cx + 38; z = block.cz + rand(-38, 38); }
    return { x, z };
  }

  alert(origin) {
    if (this.dead) return;
    const d = dist(this.position, origin);
    if (d < 45) {
      this.state = 'flee';
      this.fleeTimer = rand(4, 9);
      this.speed = rand(4.5, 6.5);
      // run away from origin
      const dx = this.position.x - origin.x, dz = this.position.z - origin.z;
      const l = Math.hypot(dx, dz) || 1;
      this.target = { x: clamp(this.position.x + dx / l * 30, -230, 230), z: clamp(this.position.z + dz / l * 30, -230, 230) };
    }
  }

  hit(damage, from) {
    if (this.dead) return;
    this.health -= damage;
    this.game.effects?.blood(this.position);
    this.game.audio?.impact();
    this.alert(from || this.position);
    if (this.health <= 0) this.kill();
  }

  kill() {
    this.dead = true;
    this.state = 'dead';
    this.game.onPedKilled?.(this);
    this.game.effects?.blood(this.position, 2.2);
  }

  update(dt, playerPos) {
    if (this.dead) {
      this.deathTimer += dt;
      this.fall = Math.min(1, this.fall + dt * 3.2);
      this.mesh.body.rotation.x = -this.fall * Math.PI * 0.48;
      this.mesh.body.position.y = 0.12;
      return;
    }
    if (this.fleeTimer > 0) {
      this.fleeTimer -= dt;
      if (this.fleeTimer <= 0) { this.state = 'walk'; this.speed = this.baseSpeed; this.target = this.pickTarget(); }
    }
    if (this.state === 'flee' && this.fleeTimer > 0 && chance(dt * 0.8)) this.target = this.pickTarget();

    const dx = this.target.x - this.position.x;
    const dz = this.target.z - this.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 1.5) {
      this.target = this.pickTarget();
    } else {
      const hx = dx / d, hz = dz / d;
      this.position.x += hx * this.speed * dt;
      this.position.z += hz * this.speed * dt;
      const targetHeading = Math.atan2(hx, hz);
      this.heading = dampAngle(this.heading, targetHeading, 5, dt);
    }
    this.game.city.collide(this.position, this.radius);
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.animT += dt;
    animateHuman(this.mesh, this.animT, this.speed, {});

    // simple separation from player
    const pd = dist(this.position, playerPos);
    if (pd < 1.1) {
      const l = Math.max(0.01, pd);
      this.position.x += (this.position.x - playerPos.x) / l * 0.4;
      this.position.z += (this.position.z - playerPos.z) / l * 0.4;
    }

    // distance culling respawn
    if (dist(this.position, playerPos) > 190) {
      const ang = rand(0, Math.PI * 2), r = rand(80, 130);
      this.position.set(clamp(playerPos.x + Math.cos(ang) * r, -220, 285), 0, clamp(playerPos.z + Math.sin(ang) * r, -220, 220));
      this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
      this.target = this.pickTarget();
    }
  }
}

/* ============================================================ */
export class Enemy {
  constructor(game, pos, opts = {}) {
    this.game = game;
    this.mesh = createHuman({
      shirt: opts.shirt ?? choice([0x9b1b30, 0x2b2b2b, 0x3a2b52, 0x1e4d3a]),
      pants: 0x1b1b24, skin: choice(SKINS), hair: 0x120e0a,
      shades: true,
    });
    this.group = this.mesh.group;
    this.position = new THREE.Vector3(pos.x, game.city.groundHeight(pos.x, pos.z), pos.z);
    this.heading = opts.heading ?? rand(0, Math.PI * 2);
    this.health = opts.health ?? 62;
    this.maxHealth = this.health;
    this.speed = 0;
    this.dead = false;
    this.fall = 0;
    this.deathTimer = 0;
    this.fireTimer = rand(0.8, 2.0);
    this.radius = 0.42;
    this.animT = rand(0, 5);
    this.aiming = false;
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.group.userData.actor = this;
    this.isEnemy = true;
    game.scene.add(this.group);
  }

  hit(damage, from) {
    if (this.dead) return false;
    this.health -= damage;
    this.game.effects?.blood(this.position);
    this.game.audio?.impact();
    this.game.hitMarker?.();
    if (this.health <= 0) {
      this.dead = true;
      this.game.effects?.blood(this.position, 2.5);
      this.game.onEnemyKilled?.(this);
    }
    return true;
  }

  update(dt, playerPos) {
    if (this.dead) {
      this.deathTimer += dt;
      this.fall = Math.min(1, this.fall + dt * 3.5);
      this.mesh.body.rotation.x = -this.fall * Math.PI * 0.5;
      this.mesh.body.position.y = 0.1;
      return;
    }
    const dx = playerPos.x - this.position.x;
    const dz = playerPos.z - this.position.z;
    const d = Math.hypot(dx, dz);
    const ang = Math.atan2(dx, dz);
    this.heading = dampAngle(this.heading, ang, 6, dt);
    this.aiming = d < 45;

    if (d > 17) {
      const sp = d > 42 ? 3.8 : 2.2;
      this.position.x += (dx / (d || 1)) * sp * dt;
      this.position.z += (dz / (d || 1)) * sp * dt;
      this.speed = sp;
    } else {
      this.speed = 0;
      // strafe slightly
      this.position.x += Math.cos(ang) * 0.7 * dt * Math.sin(this.animT);
      this.position.z += -Math.sin(ang) * 0.7 * dt * Math.sin(this.animT);
    }
    this.game.city.collide(this.position, this.radius);
    this.position.y = this.game.city.groundHeight(this.position.x, this.position.z);
    this.group.position.copy(this.position);
    this.group.rotation.y = this.heading;
    this.animT += dt;
    animateHuman(this.mesh, this.animT, this.speed, { aim: this.aiming });

    if (!this.game.player.dead && d < 40 && this.game.hasLineOfSight?.(this.position, playerPos)) {
      this.fireTimer -= dt;
      if (this.fireTimer <= 0) {
        this.fireTimer = rand(1.1, 2.2);
        this.game.enemyShoot(this, playerPos);
      }
    } else {
      this.fireTimer = Math.max(this.fireTimer, 0.7);
    }
  }
}
