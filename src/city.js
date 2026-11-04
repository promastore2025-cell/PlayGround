import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  CITY, COLORS, clamp, rand, randInt, choice, chance,
  asphaltTexture, concreteTexture, windowTexture, windowEmissive,
  signTexture, glowTexture, sandTexture,
} from './utils.js';

const SIDEWALK_Y = 0.14;

function isRoadCoord(v) {
  return CITY.roads.some(r => Math.abs(v - r) < CITY.roadWidth / 2);
}

function blockCenterAt(x, z) {
  const cx = CITY.roads.find((r, i) => i < CITY.roads.length - 1 && x > r + 3 && x < CITY.roads[i + 1] - 3);
  return cx;
}

export class City {
  constructor(scene) {
    this.scene = scene;
    this.colliders = [];
    this.shootables = [];
    this.blocks = [];
    this.markers = [];
    this.root = new THREE.Group();
    scene.add(this.root);
    this.windowMats = [];
    this.neonMats = [];
    this.palms = [];
    this.build();
  }

  build() {
    this.buildGround();
    this.buildBlocks();
    this.buildRoadMarkings();
    this.buildBeach();
    this.buildWater();
    this.buildPier();
    this.buildPalms();
    this.buildStreetlights();
    this.buildBillboards();
  }

  /* ---------------- ground / roads ---------------- */
  buildGround() {
    const asphalt = asphaltTexture();
    asphalt.repeat.set(28, 28);
    const roadMat = new THREE.MeshStandardMaterial({ map: asphalt, color: 0x8f8f99, roughness: 0.94, metalness: 0.02 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(486, 486), roadMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0.01;
    ground.receiveShadow = true;
    this.root.add(ground);
    this.roadMat = roadMat;

    const concrete = concreteTexture('#a9a196');
    concrete.repeat.set(10, 10);
    this.sidewalkMat = new THREE.MeshStandardMaterial({ map: concrete, color: 0xd9d2c6, roughness: 0.9 });
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x77716a, roughness: 0.8 });

    for (const cx of [-150, -50, 50, 150]) {
      for (const cz of [-150, -50, 50, 150]) {
        const slab = new THREE.Mesh(new THREE.BoxGeometry(84, 0.3, 84), this.sidewalkMat);
        slab.position.set(cx, SIDEWALK_Y - 0.15, cz);
        slab.receiveShadow = true;
        this.root.add(slab);
        this.blocks.push({ cx, cz, size: 84 });
        // curbs at block edges
        for (const [ox, oz, w, d] of [[0, -42, 84, 0.5], [0, 42, 84, 0.5], [-42, 0, 0.5, 84], [42, 0, 0.5, 84]]) {
          const curb = new THREE.Mesh(new THREE.BoxGeometry(w, 0.34, d), curbMat);
          curb.position.set(cx + ox, 0.05, cz + oz);
          this.root.add(curb);
        }
      }
    }
  }

  buildRoadMarkings() {
    const geos = [];
    const dash = new THREE.BoxGeometry(0.25, 0.02, 2.6);
    const dashX = new THREE.BoxGeometry(2.6, 0.02, 0.25);
    const cross = new THREE.BoxGeometry(0.5, 0.02, 3.2);

    for (const r of CITY.roads) {
      for (let p = -232; p < 232; p += 6) {
        // skip intersections
        let nearCross = false;
        for (const n of CITY.roads) if (Math.abs(p - n) < 12) nearCross = true;
        if (nearCross) continue;
        const g1 = dash.clone(); g1.translate(r, 0.031, p); geos.push(g1);
        const g2 = dashX.clone(); g2.translate(p, 0.032, r); geos.push(g2);
      }
      // crosswalk stripes at each intersection approach
      for (const n of CITY.roads) {
        for (const side of [-1, 1]) {
          for (let k = -4; k <= 4; k++) {
            const g = cross.clone();
            g.translate(r + k * 1.1, 0.033, n + side * 10.5);
            geos.push(g);
            const g2 = cross.clone(); g2.rotateY(Math.PI / 2);
            g2.translate(n + side * 10.5, 0.034, r + k * 1.1);
            geos.push(g2);
          }
        }
      }
    }
    const merged = mergeGeometries(geos);
    const mat = new THREE.MeshStandardMaterial({ color: 0xe6e2cf, roughness: 0.7, emissive: 0x181410, emissiveIntensity: 0.3 });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.receiveShadow = true;
    this.root.add(mesh);

    // lane edge glow (subtle pink decals along Ocean Drive)
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xff2d95, transparent: true, opacity: 0.17, toneMapped: false });
    for (const side of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 400), edgeMat);
      m.position.set(200 + side * 8.6, 0.035, 0);
      this.root.add(m);
    }
  }

  /* ---------------- blocks / buildings ---------------- */
  buildBlocks() {
    const styles = {
      downtown: { h: [30, 78], w: [24, 36], palette: ['#cfd3e0', '#bcc4d8', '#d8cfe7', '#c4cbd0'], sign: 0.35 },
      mid: { h: [14, 38], w: [24, 36], palette: ['#d8c3b2', '#c8b7c9', '#d6cbbd', '#c0cfd1'], sign: 0.3 },
      beach: { h: [13, 30], w: [26, 37], palette: ['#f0d6b8', '#efc9c2', '#c9e4da', '#e8d4ef', '#f3e0c4'], sign: 0.75 },
      industrial: { h: [8, 16], w: [30, 38], palette: ['#a9a49a', '#9c9c9a', '#b0a598'], sign: 0.15 },
    };

    for (const b of this.blocks) {
      const { cx, cz } = b;
      let style = 'mid';
      const distBeach = 240 - Math.max(cx, cz);
      if (cx > 100) style = 'beach';
      else if (Math.abs(cx) < 110 && Math.abs(cz) < 110) style = 'downtown';
      if (cx < -100 && cz < -100) style = 'industrial';

      // special blocks
      if (cx === 50 && cz === -150) { this.buildPark(cx, cz); continue; }
      if (cx === -150 && cz === -150) { this.buildDocks(cx, cz); continue; }
      if (cx === -50 && cz === 150) { this.buildPlaza(cx, cz); continue; }
      if (cx === 50 && cz === 50) { this.buildParking(cx, cz); continue; }

      const s = styles[style];
      for (const ox of [-21, 21]) {
        for (const oz of [-21, 21]) {
          if (style !== 'downtown' && chance(0.08)) continue;
          const w = rand(s.w[0], s.w[1]);
          const d = rand(s.w[0], s.w[1]);
          let h = rand(s.h[0], s.h[1]);
          if (style === 'downtown') h *= (1.3 - (distBeach / 500));
          const px = cx + ox + rand(-2.2, 2.2);
          const pz = cz + oz + rand(-2.2, 2.2);
          this.buildBuilding(px, pz, w, d, h, choice(s.palette), style, chance(s.sign));
        }
      }
    }
  }

  buildBuilding(x, z, w, d, h, tint, style, withSign) {
    const seed = randInt(0, 3);
    const map = windowTexture(seed);
    const emap = windowEmissive(seed);
    const tintColor = new THREE.Color(tint);
    const side = new THREE.MeshStandardMaterial({
      color: tintColor, map, emissiveMap: emap, emissive: new THREE.Color(0xffdfae),
      emissiveIntensity: style === 'beach' ? 1.15 : 0.95, roughness: 0.52, metalness: style === 'downtown' ? 0.35 : 0.08,
    });
    const roof = new THREE.MeshStandardMaterial({ color: tintColor.clone().multiplyScalar(0.55), roughness: 0.9 });
    this.windowMats.push(side);

    const geo = new THREE.BoxGeometry(w, h, d);
    // per-face UV scaling (faces: +x, -x, +y, -y, +z, -z)
    const uv = geo.attributes.uv;
    const scales = [
      [d / 16, h / 30], [d / 16, h / 30], [w / 16, d / 16], [w / 16, d / 16], [w / 16, h / 30], [w / 16, h / 30],
    ];
    for (let f = 0; f < 6; f++) {
      const [su, sv] = scales[f];
      for (let i = 0; i < 4; i++) {
        const idx = f * 4 + i;
        uv.setXY(idx, uv.getX(idx) * su, uv.getY(idx) * sv);
      }
    }
    uv.needsUpdate = true;
    const mesh = new THREE.Mesh(geo, [side, side, roof, roof, side, side]);
    mesh.position.set(x, SIDEWALK_Y + h / 2, z);
    mesh.castShadow = h < 45;
    mesh.receiveShadow = true;
    mesh.userData.type = 'building';
    this.root.add(mesh);
    this.shootables.push(mesh);
    this.colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h });

    // rooftop parapet
    const par = new THREE.Mesh(new THREE.BoxGeometry(w + 0.7, 0.9, d + 0.7), roof);
    par.position.set(x, SIDEWALK_Y + h + 0.4, z);
    this.root.add(par);

    // rooftop clutter
    const n = randInt(1, 3);
    for (let i = 0; i < n; i++) {
      const uw = rand(2, 5), ud = rand(2, 5), uh = rand(1.1, 2.6);
      const ac = new THREE.Mesh(new THREE.BoxGeometry(uw, uh, ud), new THREE.MeshStandardMaterial({ color: 0x8e8b88, roughness: 0.85 }));
      ac.position.set(x + rand(-w / 2 + 4, w / 2 - 4), SIDEWALK_Y + h + uh / 2 + 0.4, z + rand(-d / 2 + 4, d / 2 - 4));
      this.root.add(ac);
    }
    if (chance(0.3) && h > 18) {
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, rand(5, 11), 5), new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.3 }));
      ant.position.set(x + rand(-w / 3, w / 3), SIDEWALK_Y + h + 6, z);
      this.root.add(ant);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.24, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff2b2b, toneMapped: false }));
      bulb.position.copy(ant.position); bulb.position.y += 5.5;
      this.root.add(bulb);
    }

    if (style === 'beach' && chance(0.5)) {
      // stepped art-deco crown
      const crown = new THREE.Mesh(new THREE.BoxGeometry(w * 0.62, rand(2.5, 5), d * 0.62), [side, side, roof, roof, side, side]);
      crown.position.set(x, SIDEWALK_Y + h + 2.3, z);
      this.root.add(crown);
      h += 4;
    }

    // neon trim / corner strips
    if (chance(style === 'beach' ? 0.72 : 0.34)) {
      const neonColor = choice([0xff2d95, 0x22e5ec, 0x9d5bff, 0xffb03a]);
      const neonMat = new THREE.MeshBasicMaterial({ color: neonColor, toneMapped: false, transparent: true, opacity: 0.95 });
      this.neonMats.push(neonMat);
      const trim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.13, 0.13), neonMat);
      trim.position.set(x, SIDEWALK_Y + h + 0.15, z + d / 2 + 0.26);
      this.root.add(trim);
      const trim2 = trim.clone(); trim2.position.z = z - d / 2 - 0.26; this.root.add(trim2);
      if (style === 'beach') {
        for (const sx of [-1, 1]) {
          const strip = new THREE.Mesh(new THREE.BoxGeometry(0.16, h * 0.75, 0.16), neonMat);
          strip.position.set(x + sx * (w / 2 + 0.1), SIDEWALK_Y + h * 0.45, z + d / 2 + 0.15);
          this.root.add(strip);
        }
      }
    }

    // street-level storefront glow and awning
    if (chance(style === 'beach' ? 0.85 : 0.5)) {
      const shopNames = ['CAFE', 'LIQUOR', 'SURF', 'PIZZA', 'TATTOO', 'RECORDS', 'BAR', 'HOTEL', 'DINER', 'BODEGA'];
      const shopColors = ['#ff2d95', '#22e5ec', '#ffd15c', '#ff7a5c', '#b06bff'];
      const shopColor = choice(shopColors);
      const shopName = choice(shopNames);
      const tex = signTexture(shopName, chance(0.5) ? 'OPEN LATE' : null, shopColor, 'rgba(9,6,16,0.96)', 384, 128);
      const sw = Math.min(w * 0.62, 9);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(sw, sw * 0.33), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, transparent: true }));
      sign.position.set(x, SIDEWALK_Y + 2.55, z + d / 2 + 0.12);
      this.root.add(sign);
      if (chance(0.6)) {
        const awning = new THREE.Mesh(new THREE.BoxGeometry(sw + 0.8, 0.12, 1.3), new THREE.MeshStandardMaterial({ color: new THREE.Color(shopColor), roughness: 0.8 }));
        awning.position.set(x, SIDEWALK_Y + 3.35, z + d / 2 + 0.55);
        awning.rotation.x = 0.15;
        this.root.add(awning);
      }
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(sw * 1.2, 2.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(shopColor), transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      glow.position.set(x, SIDEWALK_Y + 1.2, z + d / 2 + 0.05);
      this.root.add(glow);
      this.neonMats.push(sign.material);
    }

    // Ocean Drive-facing storefront on beach hotels
    if (style === 'beach' && chance(0.92)) {
      const shopNames = ['CAFE', 'LIQUOR', 'SURF', 'PIZZA', 'TATTOO', 'RECORDS', 'BAR', 'HOTEL', 'DINER', 'BODEGA'];
      const shopColors = ['#ff2d95', '#22e5ec', '#ffd15c', '#ff7a5c', '#b06bff'];
      const shopColor = choice(shopColors);
      const shopName = choice(shopNames);
      const tex = signTexture(shopName, chance(0.6) ? 'OCEAN DRIVE' : null, shopColor, 'rgba(9,6,16,0.96)', 384, 128);
      const sw = Math.min(d * 0.62, 9);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(sw, sw * 0.33), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, transparent: true, side: THREE.DoubleSide }));
      sign.position.set(x + w / 2 + 0.12, SIDEWALK_Y + 2.55, z);
      sign.rotation.y = Math.PI / 2;
      this.root.add(sign);
      const awning = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.12, sw + 0.8), new THREE.MeshStandardMaterial({ color: new THREE.Color(shopColor), roughness: 0.8 }));
      awning.position.set(x + w / 2 + 0.55, SIDEWALK_Y + 3.35, z);
      awning.rotation.z = -0.15;
      this.root.add(awning);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(sw * 1.2, 2.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(shopColor), transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      glow.position.set(x + w / 2 + 0.05, SIDEWALK_Y + 1.2, z);
      glow.rotation.y = Math.PI / 2;
      this.root.add(glow);
      this.neonMats.push(sign.material);
    }

    // rooftop sign
    if (withSign) {
      this.addRoofSign(x, z, w, d, h, style);
    } else if (style !== 'beach' && chance(0.24)) {
      this.addBladeSign(x, z, w, d, h);
    }
  }

  addRoofSign(x, z, w, d, h, style) {
    const names = ['FLAMINGO', 'OCEAN VIEW', 'MALIBU CLUB', 'THE COLONY', 'SUNSET', 'PALMS', 'CORAL', 'VICE', 'STARLITE', 'TROPICANA', 'NEPTUNE', 'BREAKWATER'];
    const subs = ['HOTEL · BAR', 'OCEAN DRIVE', 'LIVE MUSIC', 'ROOMS AVAILABLE', 'EST. 1986', 'COCKTAILS', 'OPEN ALL NIGHT'];
    const name = choice(names);
    const color = choice(['#ff2d95', '#22e5ec', '#ffcf5c', '#c26bff', '#ff6b5c']);
    const tex = signTexture(name, choice(subs), color, 'rgba(9,7,16,0.92)', 512, 128);
    const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, transparent: true, side: THREE.DoubleSide });
    const pw = Math.min(w * 0.8, 22), ph = pw * 0.25;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), mat);
    const east = style === 'beach';
    if (east) {
      plane.position.set(x + w / 2 + 0.5, SIDEWALK_Y + h + 2.2, z);
      plane.rotation.y = Math.PI / 2;
      this.root.add(plane);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.25, ph + 1, pw + 1), new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.7 }));
      frame.position.set(x + w / 2 + 0.32, plane.position.y, z);
      this.root.add(frame);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(pw * 1.5, ph * 3), new THREE.MeshBasicMaterial({ map: glowTexture(color, 0.12), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.32 }));
      glow.position.set(x + w / 2 + 1.2, plane.position.y, z);
      glow.rotation.y = Math.PI / 2;
      this.root.add(glow);
    } else {
      plane.position.set(x, SIDEWALK_Y + h + 2.2, z + d / 2 + 0.5);
      plane.rotation.y = 0;
      this.root.add(plane);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(pw + 1, ph + 1, 0.25), new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.7 }));
      frame.position.set(x, plane.position.y, z + d / 2 + 0.32);
      this.root.add(frame);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(pw * 1.5, ph * 3), new THREE.MeshBasicMaterial({ map: glowTexture(color, 0.12), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.32 }));
      glow.position.set(x, plane.position.y, z + d / 2 + 1.2);
      this.root.add(glow);
    }
    this.neonMats.push(mat);
  }

  addBladeSign(x, z, w, d, h) {
    const words = ['BAR', 'HOTEL', 'CLUB', 'CAFE', 'VICE', 'SURF', 'TATTOO', 'LOUNGE', 'MOTEL', 'DINER'];
    const color = choice(['#ff2d95', '#22e5ec', '#ffcf5c', '#ff6b5c', '#b06bff']);
    const word = choice(words);
    const tex = signTexture(word, null, color, 'rgba(8,6,14,0.95)', 320, 512);
    const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide, transparent: true });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 5.4), mat);
    sign.position.set(x + w / 2 + 0.3, SIDEWALK_Y + Math.min(h * 0.55, 13), z + d / 3);
    sign.rotation.y = Math.PI / 2;
    this.root.add(sign);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(3.2, 5.9, 0.22), new THREE.MeshStandardMaterial({ color: 0x17141d, roughness: 0.7 }));
    bar.position.set(x + w / 2 + 0.18, sign.position.y, z + d / 3);
    bar.rotation.y = Math.PI / 2;
    this.root.add(bar);
    this.neonMats.push(mat);
  }

  /* ---------------- special blocks ---------------- */
  buildPark(cx, cz) {
    const grass = new THREE.Mesh(new THREE.BoxGeometry(70, 0.2, 70), new THREE.MeshStandardMaterial({ color: 0x2f6b3e, roughness: 1 }));
    grass.position.set(cx, SIDEWALK_Y + 0.02, cz);
    grass.receiveShadow = true;
    this.root.add(grass);
    // fountain
    const stone = new THREE.MeshStandardMaterial({ color: 0xc9c0ac, roughness: 0.85 });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(7, 7.4, 1, 24), stone);
    basin.position.set(cx, SIDEWALK_Y + 0.5, cz);
    this.root.add(basin);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.4, 0.25, 24), new THREE.MeshStandardMaterial({ color: 0x26b6c4, emissive: 0x0a8fa0, emissiveIntensity: 0.7, roughness: 0.2, metalness: 0.2 }));
    water.position.set(cx, SIDEWALK_Y + 1.02, cz);
    this.root.add(water);
    const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.45, 4, 8), stone);
    spout.position.set(cx, SIDEWALK_Y + 2.8, cz);
    this.root.add(spout);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), new THREE.MeshBasicMaterial({ color: 0x83f7ff, toneMapped: false }));
    orb.position.set(cx, SIDEWALK_Y + 5, cz);
    this.root.add(orb);
    this.colliders.push({ minX: cx - 7.4, maxX: cx + 7.4, minZ: cz - 7.4, maxZ: cz + 7.4, h: 2 });
    // paths
    const pathMat = new THREE.MeshStandardMaterial({ color: 0xcfc5b3, roughness: 0.9 });
    for (const r of [0, Math.PI / 2]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(70, 0.06, 4), pathMat);
      p.position.set(cx, SIDEWALK_Y + 0.15, cz);
      p.rotation.y = r;
      this.root.add(p);
    }
    // palms instanced later by positions list
    this.palmSpots = this.palmSpots || [];
    for (const [ox, oz] of [[-24, -24], [24, -24], [-24, 24], [24, 24], [-30, 0], [30, 0]]) this.palmSpots.push([cx + ox, cz + oz, rand(0.8, 1.2)]);
    // benches
    for (let i = 0; i < 4; i++) this.addBench(cx + rand(-28, 28), cz + rand(-28, 28));
  }

  buildPlaza(cx, cz) {
    const mat = new THREE.MeshStandardMaterial({ map: concreteTexture('#c5b9a8'), color: 0xe3d9c6, roughness: 0.9 });
    const slab = new THREE.Mesh(new THREE.BoxGeometry(76, 0.22, 76), mat);
    slab.position.set(cx, SIDEWALK_Y + 0.01, cz);
    this.root.add(slab);
    // central obelisk
    const stone = new THREE.MeshStandardMaterial({ color: 0xd8cfbe, roughness: 0.8 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(9, 1.2, 9), stone);
    base.position.set(cx, SIDEWALK_Y + 0.6, cz); this.root.add(base);
    const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 2.2, 15, 4), stone);
    ob.rotation.y = Math.PI / 4;
    ob.position.set(cx, SIDEWALK_Y + 8.5, cz); this.root.add(ob);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 10), new THREE.MeshBasicMaterial({ color: 0xffd15c, toneMapped: false }));
    cap.position.set(cx, SIDEWALK_Y + 16.2, cz); this.root.add(cap);
    this.colliders.push({ minX: cx - 4.5, maxX: cx + 4.5, minZ: cz - 4.5, maxZ: cz + 4.5, h: 2 });
    this.palmSpots = this.palmSpots || [];
    for (const [ox, oz] of [[-30, -30], [30, -30], [-30, 30], [30, 30]]) this.palmSpots.push([cx + ox, cz + oz, 1.1]);
    for (let i = 0; i < 5; i++) this.addBench(cx + rand(-30, 30), cz + rand(-30, 30));
  }

  buildParking(cx, cz) {
    const mat = new THREE.MeshStandardMaterial({ map: asphaltTexture(), color: 0x9a9a9a, roughness: 0.95 });
    const lot = new THREE.Mesh(new THREE.BoxGeometry(76, 0.18, 76), mat);
    lot.position.set(cx, SIDEWALK_Y + 0.01, cz);
    this.root.add(lot);
    // parking lines
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xd9d5c0 });
    for (let i = -3; i <= 3; i++) {
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 10), lineMat);
      l.position.set(cx + i * 9, SIDEWALK_Y + 0.12, cz + 22);
      this.root.add(l);
      const l2 = l.clone(); l2.position.z = cz - 22; this.root.add(l2);
    }
    // dumpsters / lot decor
    for (let i = 0; i < 3; i++) {
      const dump = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, 2.2), new THREE.MeshStandardMaterial({ color: choice([0x2c4d3c, 0x4c3a2c, 0x334d5c]), roughness: 0.8 }));
      dump.position.set(cx + rand(-28, 28), SIDEWALK_Y + 1.1, cz + rand(-28, 28));
      dump.rotation.y = rand(0, Math.PI);
      this.root.add(dump);
    }
  }

  buildDocks(cx, cz) {
    // industrial yard with warehouses
    const mat = new THREE.MeshStandardMaterial({ map: asphaltTexture(), color: 0x8b8b88, roughness: 0.95 });
    const lot = new THREE.Mesh(new THREE.BoxGeometry(80, 0.18, 80), mat);
    lot.position.set(cx, SIDEWALK_Y + 0.01, cz);
    this.root.add(lot);
    const warehouseMat = new THREE.MeshStandardMaterial({ color: 0x7c827f, roughness: 0.85, metalness: 0.25 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x4c504e, roughness: 0.9 });
    for (const [ox, oz, w, d, h, ry] of [[-18, -18, 34, 22, 12, 0], [18, 18, 30, 20, 10, Math.PI / 2], [-16, 20, 28, 18, 9, 0]]) {
      const wh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), warehouseMat);
      wh.position.set(cx + ox, SIDEWALK_Y + h / 2, cz + oz);
      wh.rotation.y = ry;
      wh.castShadow = true; wh.receiveShadow = true;
      wh.userData.type = 'building';
      this.root.add(wh);
      this.shootables.push(wh);
      const aw = Math.abs(w * Math.cos(ry)) + Math.abs(d * Math.sin(ry));
      const ad = Math.abs(w * Math.sin(ry)) + Math.abs(d * Math.cos(ry));
      this.colliders.push({ minX: cx + ox - aw / 2, maxX: cx + ox + aw / 2, minZ: cz + oz - ad / 2, maxZ: cz + oz + ad / 2, h });
      const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 1, 0.8, d + 1), roofMat);
      roof.position.set(cx + ox, SIDEWALK_Y + h + 0.3, cz + oz);
      roof.rotation.y = ry;
      this.root.add(roof);
      // roller door
      const door = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, h * 0.7, 0.2), new THREE.MeshStandardMaterial({ color: 0x3a4046, metalness: 0.5, roughness: 0.6 }));
      door.position.set(cx + ox, SIDEWALK_Y + h * 0.36, cz + oz + d / 2 + 0.1);
      door.rotation.y = ry;
      this.root.add(door);
    }
    // shipping containers
    for (let i = 0; i < 7; i++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.8, 2.6), new THREE.MeshStandardMaterial({ color: choice([0x9c3b2e, 0x2e5d8c, 0x3d7a4a, 0x9b7a2c, 0x6b4a82]), roughness: 0.8 }));
      c.position.set(cx + rand(-32, 32), SIDEWALK_Y + 1.4 + (i > 4 ? 2.8 : 0), cz + rand(-32, 32));
      c.rotation.y = chance(0.5) ? 0 : Math.PI / 2;
      this.root.add(c);
    }
    this.palmSpots = this.palmSpots || [];
    for (const [ox, oz] of [[-36, 0], [36, 0], [0, -36], [0, 36]]) this.palmSpots.push([cx + ox, cz + oz, 0.9]);
  }

  addBench(x, z) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x5d4632, roughness: 0.9 });
    const metal = new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.6, metalness: 0.6 });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, 0.9), mat);
    seat.position.set(x, SIDEWALK_Y + 0.55, z);
    this.root.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.8, 0.14), mat);
    back.position.set(x, SIDEWALK_Y + 0.95, z - 0.4);
    this.root.add(back);
    for (const sx of [-1.3, 1.3]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.55, 0.8), metal);
      leg.position.set(x + sx, SIDEWALK_Y + 0.28, z);
      this.root.add(leg);
    }
  }

  /* ---------------- beach / water ---------------- */
  buildBeach() {
    const geo = new THREE.PlaneGeometry(74, 486, 24, 80);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = [];
    for (let i = 0; i < pos.count; i++) {
      const lx = pos.getX(i), lz = pos.getZ(i);
      const x = 240 + (lx + 37);
      const y = 0.12 - Math.max(0, (x - 242)) * 0.0122 + Math.sin(lz * 0.15) * 0.03;
      pos.setY(i, y);
      const t = clamp((x - 242) / 62, 0, 1);
      const c = new THREE.Color().setHSL(0.105, 0.42, 0.66 - t * 0.1);
      if (y < -0.5) c.multiplyScalar(0.72);
      colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const sandMap = sandTexture();
    sandMap.repeat.set(14, 70);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: sandMap, roughness: 1, metalness: 0 });
    const beach = new THREE.Mesh(geo, mat);
    beach.receiveShadow = true;
    // PlaneGeometry local x spans -37..37, positioned so sand starts at the promenade edge
    beach.position.x = 277;
    this.root.add(beach);
    this.beachMesh = beach;

    // promenade strip
    const promTex = concreteTexture('#c5b9a5');
    promTex.repeat.set(4, 60);
    const promMat = new THREE.MeshStandardMaterial({ map: promTex, color: 0xe0d4bd, roughness: 0.94 });
    const prom = new THREE.Mesh(new THREE.BoxGeometry(32, 0.16, 486), promMat);
    prom.position.set(226, SIDEWALK_Y + 0.01, 0);
    prom.receiveShadow = true;
    this.root.add(prom);
    // sea wall
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xb9b0a0, roughness: 0.9 });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 486), wallMat);
    wall.position.set(242, 0.4, 0);
    this.root.add(wall);
    // railing posts
    const rail = new THREE.MeshStandardMaterial({ color: 0x8a7f70, roughness: 0.6, metalness: 0.4 });
    const postGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.1, 5);
    const posts = new THREE.InstancedMesh(postGeo, rail, 60);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 60; i++) {
      dummy.position.set(242, 1.1, -240 + i * 8.1);
      dummy.updateMatrix();
      posts.setMatrixAt(i, dummy.matrix);
    }
    this.root.add(posts);
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 486), rail);
    hand.position.set(242, 1.65, 0);
    this.root.add(hand);

    // beach umbrellas & towels
    this.palmSpots = this.palmSpots || [];
    for (let i = 0; i < 14; i++) {
      const z = rand(-220, 220);
      const x = rand(250, 286);
      const col = choice([0xff2d95, 0xffd15c, 0x22e5ec, 0xff6b5c, 0xffffff]);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 5), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
      pole.position.set(x, 0.5, z); this.root.add(pole);
      const top = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.7, 10), new THREE.MeshStandardMaterial({ color: col, roughness: 0.8, side: THREE.DoubleSide }));
      top.position.set(x, 1.8, z); this.root.add(top);
      const towel = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.2), new THREE.MeshStandardMaterial({ color: col, roughness: 0.9, side: THREE.DoubleSide }));
      towel.rotation.x = -Math.PI / 2; towel.rotation.z = rand(0, Math.PI);
      towel.position.set(x + rand(-2, 2), 0.28, z + rand(-2, 2));
      this.root.add(towel);
    }
    for (let i = 0; i < 18; i++) {
      const bx = rand(246, 274), bz = rand(-236, 236);
      if (bz > 108 && bz < 180 && bx < 276) continue;
      this.palmSpots.push([bx, bz, rand(0.7, 1.35)]);
    }
    // promenade palms
    for (let i = 0; i < 14; i++) this.palmSpots.push([233, -222 + i * 34.5, rand(0.9, 1.2)]);
    for (let i = 0; i < 9; i++) this.palmSpots.push([210.5, -210 + i * 52, rand(0.85, 1.1)]);
    this.palmSpots.push([233, 121, 1.25], [211, 128, 1.15], [233, 65, 1.3], [211, 47, 1.1]);
    // outer sidewalks palms near blocks
    for (let i = 0; i < 8; i++) this.palmSpots.push([rand(-225, 200), rand(-225, 225), rand(0.75, 1.15)]);
    this.buildPromenadeDetails();
    this.buildFoam();
  }

  buildPromenadeDetails() {
    const wood = new THREE.MeshStandardMaterial({ color: 0x6f4f35, roughness: 0.9 });
    const metal = new THREE.MeshStandardMaterial({ color: 0x2b2a30, roughness: 0.55, metalness: 0.7 });
    const green = new THREE.MeshStandardMaterial({ color: 0x2e6b3e, roughness: 0.9 });
    // benches + planters + bins along the promenade
    for (let i = 0; i < 17; i++) {
      const z = -225 + i * 27.5;
      if (Math.abs(z - 142) < 12) continue;
      this.addBench(219, z);
      // planter
      const planter = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 1.4), wood);
      planter.position.set(213.5, 0.23 + 0.45, z + 8);
      this.root.add(planter);
      const shrub = new THREE.Mesh(new THREE.SphereGeometry(1.1, 8, 6), green);
      shrub.scale.set(1, 0.8, 1);
      shrub.position.set(213.5, 0.23 + 1.2, z + 8);
      this.root.add(shrub);
      // trash can
      const bin = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.28, 0.9, 8), metal);
      bin.position.set(237, 0.23 + 0.45, z + 14);
      this.root.add(bin);
    }
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xff2d95, transparent: true, opacity: 0.55, toneMapped: false });
    for (const x of [210.1, 239.9]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.03, 480), stripMat);
      strip.position.set(x, 0.25, 0);
      this.root.add(strip);
    }
    const cyanStrip = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.03, 480), new THREE.MeshBasicMaterial({ color: 0x22e5ec, transparent: true, opacity: 0.4, toneMapped: false }));
    cyanStrip.position.set(231, 0.25, 0);
    this.root.add(cyanStrip);

    // neon bollards at the beach edge
    const bollardMat = new THREE.MeshStandardMaterial({ color: 0x23232b, metalness: 0.6, roughness: 0.4 });
    const bulbColors = [0xff2d95, 0x22e5ec, 0xffd15c];
    for (let i = 0; i < 32; i++) {
      const z = -230 + i * 14.4;
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.9, 6), bollardMat);
      b.position.set(240.2, 0.23 + 0.45, z);
      this.root.add(b);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 6), new THREE.MeshBasicMaterial({ color: bulbColors[i % 3], toneMapped: false }));
      bulb.position.set(240.2, 0.23 + 0.95, z);
      this.root.add(bulb);
    }
    // beach kiosks
    const kioskData = [[234, 78, 0, 0xff2d95, 'SURF SHACK'], [228, -44, Math.PI, 0x22e5ec, 'COLD DRINKS'], [228, 202, 0, 0xffd15c, 'TATTOO']];
    for (const [x, z, ry, color, name] of kioskData) {
      const k = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(5.4, 3, 4), new THREE.MeshStandardMaterial({ color: 0xf0e4cf, roughness: 0.85 }));
      base.position.y = 1.5; k.add(base);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.3, 5), new THREE.MeshStandardMaterial({ color: 0x2b2233, roughness: 0.7 }));
      roof.position.y = 3.1; k.add(roof);
      const awning = new THREE.Mesh(new THREE.BoxGeometry(6, 0.16, 1.4), new THREE.MeshStandardMaterial({ color, roughness: 0.75 }));
      awning.position.set(0, 2.7, 2.5); awning.rotation.x = 0.12; k.add(awning);
      const signTex = signTexture(name, null, '#' + color.toString(16).padStart(6, '0'), 'rgba(8,6,14,0.94)', 384, 96);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.1), new THREE.MeshBasicMaterial({ map: signTex, toneMapped: false, transparent: true, side: THREE.DoubleSide }));
      sign.position.set(0, 3.55, 2.02); k.add(sign);
      this.neonMats.push(sign.material);
      const kioskGlass = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.25), new THREE.MeshBasicMaterial({ color: 0x2a1c1b, transparent: true, opacity: 0.9, toneMapped: false }));
      kioskGlass.position.set(0, 1.55, 2.02); k.add(kioskGlass);
      const warm = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.9), new THREE.MeshBasicMaterial({ color: 0xffc27a, transparent: true, opacity: 0.5, toneMapped: false }));
      warm.position.set(0, 1.55, 2.035); k.add(warm);
      const menu = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.5), new THREE.MeshBasicMaterial({ color: 0x1b1320 }));
      menu.position.set(2.1, 1.4, 2.02); k.add(menu);
      k.position.set(x, 0.23, z); k.rotation.y = ry;
      this.root.add(k);
      this.colliders.push({ minX: x - 3.2, maxX: x + 3.2, minZ: z - 2.4, maxZ: z + 2.4, h: 3.2 });
    }
    // lifeguard towers on the sand
    for (const [x, z] of [[268, 116], [268, -22], [268, -170]]) {
      const g = new THREE.Group();
      const legMat = new THREE.MeshStandardMaterial({ color: 0x8a7356, roughness: 0.9 });
      for (const [ox, oz] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 3.2, 5), legMat);
        leg.position.set(ox, 1.6, oz); g.add(leg);
      }
      const hut = new THREE.Mesh(new THREE.BoxGeometry(3, 1.8, 3), new THREE.MeshStandardMaterial({ color: 0xf0ddbc, roughness: 0.85 }));
      hut.position.y = 3.4; g.add(hut);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.2, 4), new THREE.MeshStandardMaterial({ color: 0xff2d95, roughness: 0.8 }));
      roof.position.y = 4.9; roof.rotation.y = Math.PI / 4; g.add(roof);
      const ramp = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.16, 4.4), legMat);
      ramp.position.set(0, 1.7, 3.4); ramp.rotation.x = -0.55; g.add(ramp);
      g.position.set(x, 0.05, z);
      this.root.add(g);
    }
  }

  buildFoam() {
    const foamMat = new THREE.MeshBasicMaterial({ color: 0xd8fbff, transparent: true, opacity: 0.38, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const foam = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 486), foamMat);
    foam.rotation.x = -Math.PI / 2;
    foam.position.set(294, -0.51, 0);
    this.root.add(foam);
    this.foam = foam;
    const wet = new THREE.Mesh(new THREE.PlaneGeometry(8, 486), new THREE.MeshStandardMaterial({ color: 0x8a704c, roughness: 0.6, transparent: true, opacity: 0.55 }));
    wet.rotation.x = -Math.PI / 2;
    wet.position.set(289, -0.34, 0);
    this.root.add(wet);
  }

  buildWater() {
    const geo = new THREE.PlaneGeometry(2400, 2400, 120, 120);
    this.waterUniforms = {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x064a5e) },
      uShallow: { value: new THREE.Color(0x18aab8) },
      uFogColor: { value: new THREE.Color(0x3a1a4a) },
      uFogNear: { value: 260 },
      uFogFar: { value: 900 },
      uSun: { value: new THREE.Vector3(0.6, 0.5, 0.4) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.waterUniforms,
      transparent: true,
      depthWrite: true,
      vertexShader: `
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vWave;
        void main(){
          vec3 p = position;
          float w1 = sin(p.x*0.075 + uTime*0.85) * 0.38;
          float w2 = sin(p.y*0.11 - uTime*0.6) * 0.26;
          float w3 = sin((p.x+p.y)*0.045 + uTime*0.4) * 0.5;
          p.z += (w1 + w2 + w3) * smoothstep(0.0, 400.0, length(position.xy));
          vWave = w1 + w2 + w3;
          vec4 wp = modelMatrix * vec4(p,1.0);
          vWorld = wp.xyz;
          vNormalW = normalize(vec3(cos(p.x*0.075+uTime*0.85)*0.06, 1.0, cos(p.y*0.11-uTime*0.6)*0.05));
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform vec3 uSun;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vWave;
        void main(){
          vec3 viewDir = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(viewDir, normalize(vNormalW)), 0.0), 2.4);
          float bands = sin(vWorld.x*0.16 + uTime*0.6) * 0.5 + 0.5;
          bands *= sin(vWorld.z*0.14 - uTime*0.45) * 0.5 + 0.5;
          vec3 col = mix(uDeep, uShallow, clamp(fres*1.25 + bands*0.12, 0.0, 1.0));
          vec3 sunDir = normalize(uSun);
          float spec = pow(max(dot(reflect(-sunDir, normalize(vNormalW)), viewDir), 0.0), 80.0);
          col += vec3(1.0, 0.78, 0.5) * spec * 1.5;
          float sparkle = pow(bands, 8.0) * 0.25;
          col += vec3(0.6,0.95,1.0) * sparkle;
          float fogF = smoothstep(uFogNear, uFogFar, length(cameraPosition - vWorld));
          col = mix(col, uFogColor, fogF);
          gl_FragColor = vec4(col, 0.94);
        }
      `,
    });
    const water = new THREE.Mesh(geo, mat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, -0.55, 0);
    water.renderOrder = 1;
    this.root.add(water);
    this.water = water;

    // distant islands
    for (const [x, z, s] of [[720, -500, 1.5], [920, 300, 1], [-760, 500, 1.3], [350, 800, 0.8]]) {
      const isle = new THREE.Mesh(new THREE.SphereGeometry(60 * s, 16, 10), new THREE.MeshStandardMaterial({ color: 0x1c3a2e, roughness: 1 }));
      isle.scale.set(1.6, 0.18, 1);
      isle.position.set(x, -4, z);
      this.root.add(isle);
    }
  }

  buildPier() {
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b4a32, roughness: 0.9 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(80, 0.7, 16), wood);
    deck.position.set(342, 0.3, 64);
    deck.receiveShadow = true;
    this.root.add(deck);
    this.pier = { minX: 302, maxX: 382, minZ: 56, maxZ: 72 };
    // posts
    for (let i = 0; i <= 20; i++) {
      for (const side of [-1, 1]) {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 6, 6), wood);
        p.position.set(302 + i * 4, -2.2, 64 + side * 7);
        this.root.add(p);
      }
    }
    // railings
    const railMat = new THREE.MeshStandardMaterial({ color: 0xc9b8a0, metalness: 0.4, roughness: 0.5 });
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(80, 0.18, 0.18), railMat);
      rail.position.set(342, 1.7, 64 + side * 7.6);
      this.root.add(rail);
      for (let i = 0; i <= 20; i++) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.3, 5), railMat);
        post.position.set(302 + i * 4, 1.1, 64 + side * 7.6);
        this.root.add(post);
      }
    }
    // pier lamps
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false });
    for (let i = 0; i < 5; i++) {
      for (const side of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.6, 5), railMat);
        pole.position.set(310 + i * 16, 2.6, 64 + side * 7.2);
        this.root.add(pole);
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), bulbMat);
        b.position.copy(pole.position); b.position.y += 2.4;
        this.root.add(b);
      }
    }
    // entrance arch sign
    const tex = signTexture('VICE POINT PIER', 'OPEN 24 HOURS', '#ff2d95', 'rgba(8,6,14,0.9)', 512, 128);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(16, 4), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide }));
    sign.position.set(300, 4.6, 64);
    sign.rotation.y = Math.PI / 2;
    this.root.add(sign);
    this.neonMats.push(sign.material);
  }

  buildPalms() {
    // build a single merged palm geometry with vertex colors
    const parts = [];
    const trunkColor = new THREE.Color(0x7a5a3c);
    const leafColor = new THREE.Color(0x3f8a4d);
    const leafColor2 = new THREE.Color(0x57a85e);
    let y = 0;
    for (let i = 0; i < 5; i++) {
      const seg = new THREE.CylinderGeometry(0.22 - i * 0.018, 0.28 - i * 0.018, 1.9, 6);
      seg.translate(0.12 * i * i * 0.16, y + 0.9, 0.03 * i);
      const colors = [];
      for (let v = 0; v < seg.attributes.position.count; v++) colors.push(trunkColor.r, trunkColor.g, trunkColor.b);
      seg.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      parts.push(seg);
      y += 1.75;
    }
    // fronds: tapered, drooping leaf strips built from vertex ribbons
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 + 0.2;
      const segs = 6;
      const len = rand(4.2, 5.1);
      const positions = [], colors = [], indices = [], uvs = [];
      const col = i % 2 ? leafColor : leafColor2;
      for (let k = 0; k <= segs; k++) {
        const t = k / segs;
        const z = t * len;
        const w = 0.42 * (1 - Math.pow(t, 1.4)) * (0.55 + 0.45 * Math.sin(t * Math.PI));
        const y = Math.sin(t * Math.PI * 0.9) * 0.35 - t * t * 1.75;
        const x1 = -w - t * 0.15, x2 = w - t * 0.15;
        positions.push(x1, y, z, x2, y, z);
        uvs.push(0, t, 1, t);
        colors.push(col.r * (0.8 + t * 0.25), col.g * (0.8 + t * 0.25), col.b * (0.8 + t * 0.25));
        colors.push(col.r * (0.8 + t * 0.25), col.g * (0.8 + t * 0.25), col.b * (0.8 + t * 0.25));
      }
      for (let k = 0; k < segs; k++) {
        const a0 = k * 2, b0 = k * 2 + 1, a1 = (k + 1) * 2, b1 = (k + 1) * 2 + 1;
        indices.push(a0, a1, b0, b0, a1, b1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(indices);
      g.computeVertexNormals();
      g.rotateY(a);
      g.translate(0.25, y - 0.55, 0.15);
      parts.push(g);
    }
    // coconuts
    for (let i = 0; i < 3; i++) {
      const c = new THREE.SphereGeometry(0.16, 6, 5);
      c.translate(Math.cos(i * 2.1) * 0.28, y - 0.5, Math.sin(i * 2.1) * 0.28);
      const colors = [];
      for (let v = 0; v < c.attributes.position.count; v++) colors.push(0.23, 0.16, 0.08);
      c.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      parts.push(c);
    }
    const merged = mergeGeometries(parts);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, flatShading: true, side: THREE.DoubleSide, emissive: 0x0c2a16, emissiveIntensity: 0.55 });
    const spots = this.palmSpots || [];
    const inst = new THREE.InstancedMesh(merged, mat, spots.length);
    inst.castShadow = true;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < spots.length; i++) {
      const [x, z, s] = spots[i];
      dummy.position.set(x, SIDEWALK_Y + 0.02, z);
      dummy.rotation.y = rand(0, Math.PI * 2);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    this.root.add(inst);
  }

  buildStreetlights() {
    const lampSpots = [];
    for (const r of CITY.roads) {
      for (let p = -220; p <= 220; p += 30) {
        lampSpots.push([r + 10.8, p]);
        lampSpots.push([p, r + 10.8]);
      }
    }
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2b2a30, roughness: 0.55, metalness: 0.7 });
    const poleGeo = new THREE.CylinderGeometry(0.09, 0.14, 6.2, 6);
    const armGeo = new THREE.BoxGeometry(1.8, 0.08, 0.08);
    const headGeo = new THREE.BoxGeometry(1.2, 0.18, 0.5);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffdca8, toneMapped: false });
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, lampSpots.length);
    const heads = new THREE.InstancedMesh(headGeo, poleMat, lampSpots.length);
    const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.18, 6, 6), bulbMat, lampSpots.length);
    const arms = new THREE.InstancedMesh(armGeo, poleMat, lampSpots.length);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < lampSpots.length; i++) {
      const [x, z] = lampSpots[i];
      const nearX = Math.abs(x - CITY.roads.reduce((a, b) => Math.abs(b - x) < Math.abs(a - x) ? b : a)) < 1;
      const dir = nearX ? 1 : -1;
      dummy.position.set(x, SIDEWALK_Y + 3.1, z); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix();
      poles.setMatrixAt(i, dummy.matrix);
      dummy.position.set(x + dir * 0.85, SIDEWALK_Y + 6.15, z); dummy.updateMatrix();
      arms.setMatrixAt(i, dummy.matrix);
      dummy.position.set(x + dir * 1.65, SIDEWALK_Y + 6.08, z); dummy.updateMatrix();
      heads.setMatrixAt(i, dummy.matrix);
      dummy.position.set(x + dir * 1.65, SIDEWALK_Y + 5.95, z); dummy.updateMatrix();
      bulbs.setMatrixAt(i, dummy.matrix);
    }
    this.root.add(poles, arms, heads, bulbs);
    this.streetBulbMat = bulbMat;
    // warm pools of light on the pavement
    const poolMat = new THREE.MeshBasicMaterial({ map: glowTexture('#ffc98a', 0.05), transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(9, 9), poolMat, lampSpots.length);
    for (let i = 0; i < lampSpots.length; i++) {
      const [x, z] = lampSpots[i];
      const nearX = Math.abs(x - CITY.roads.reduce((a, b) => Math.abs(b - x) < Math.abs(a - x) ? b : a)) < 1;
      const dir = nearX ? 1 : -1;
      dummy.position.set(x + dir * 1.65, 0.31, z);
      dummy.rotation.set(-Math.PI / 2, 0, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      pools.setMatrixAt(i, dummy.matrix);
    }
    this.root.add(pools);
  }

  buildBillboards() {
    // large neon billboards near downtown & beach
    const data = [
      [ -92, 16, -92, 0, 'VICE', 'CITY 1986', '#ff2d95' ],
      [ -92, 20, -48, Math.PI / 2, 'WAVE', '103.7 FM', '#22e5ec' ],
      [ 108, 15, 108, -Math.PI / 2, 'OCEAN', 'DRIVE', '#ffcf5c' ],
      [ -48, 18, -92, 0, 'NEON', 'NIGHTS', '#c26bff' ],
      [ 108, 13, -8, -Math.PI / 2, 'SUNSET', 'STRIP', '#ff6b5c' ],
    ];
    for (const [x, y, z, ry, top, sub, col] of data) {
      const tex = signTexture(top, sub, col, 'rgba(6,4,12,0.94)', 640, 220);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(18, 6.2), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide }));
      const nx = Math.sin(ry), nz = Math.cos(ry);
      m.position.set(x + nx * 0.26, y, z + nz * 0.26);
      m.rotation.y = ry;
      this.root.add(m);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(19, 7.2, 0.4), new THREE.MeshStandardMaterial({ color: 0x14121a, roughness: 0.8 }));
      frame.position.set(x, y, z);
      frame.rotation.y = ry;
      this.root.add(frame);
      // support legs
      for (const sx of [-6, 6]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, y, 5), new THREE.MeshStandardMaterial({ color: 0x333338, metalness: 0.6, roughness: 0.5 }));
        leg.position.set(x + Math.cos(ry) * sx, y / 2, z - Math.sin(ry) * sx);
        this.root.add(leg);
      }
      this.neonMats.push(m.material);
    }
  }

  /* ---------------- runtime ---------------- */
  groundHeight(x, z) {
    if (x > 209.5) {
      if (x <= 242) return 0.23;
      if (this.pier && x > 302 && x < 382 && z > 56 && z < 72) return 0.68;
      if (x > 302) return -1.05;
      return 0.12 - Math.max(0, x - 242) * 0.0122;
    }
    // sidewalk if inside a block
    const inBlock = (v) => {
      for (let i = 0; i < CITY.roads.length - 1; i++) {
        if (v > CITY.roads[i] + CITY.roadWidth / 2 && v < CITY.roads[i + 1] - CITY.roadWidth / 2) return true;
      }
      return false;
    };
    if (inBlock(x) && inBlock(z)) return SIDEWALK_Y;
    return 0;
  }

  districtAt(x, z) {
    if (x > 200) return 'OCEAN BEACH';
    if (x < -100 && z < -100) return 'VICE DOCKS';
    if (z < -100) return 'NORTH POINT';
    if (Math.abs(x) < 110 && Math.abs(z) < 110) return 'DOWNTOWN';
    if (z > 100 && x < 100) return 'SOUTH BEACH';
    if (x < -100) return 'WEST HEIGHTS';
    return 'OCEAN DRIVE';
  }

  collide(pos, radius, isVehicle = false) {
    let hit = false;
    for (const c of this.colliders) {
      // only vertical-range relevant (all buildings tall)
      const nx = clamp(pos.x, c.minX, c.maxX);
      const nz = clamp(pos.z, c.minZ, c.maxZ);
      let dx = pos.x - nx, dz = pos.z - nz;
      let d2 = dx * dx + dz * dz;
      if (d2 < radius * radius) {
        hit = true;
        let d = Math.sqrt(d2);
        if (d < 0.0001) {
          // inside: push out along smallest penetration
          const left = pos.x - c.minX, right = c.maxX - pos.x, back = pos.z - c.minZ, front = c.maxZ - pos.z;
          const m = Math.min(left, right, back, front);
          if (m === left) pos.x = c.minX - radius;
          else if (m === right) pos.x = c.maxX + radius;
          else if (m === back) pos.z = c.minZ - radius;
          else pos.z = c.maxZ + radius;
        } else {
          const push = (radius - d) + 0.001;
          pos.x += (dx / d) * push;
          pos.z += (dz / d) * push;
        }
      }
    }
    // world bounds
    const bound = 232;
    if (pos.x < -bound) { pos.x = -bound; hit = true; }
    if (pos.z < -bound) { pos.z = -bound; hit = true; }
    if (pos.z > bound) { pos.z = bound; hit = true; }
    if (pos.x > 293) { pos.x = 293; hit = true; }
    return hit;
  }

  update(dt, elapsed) {
    if (this.waterUniforms) this.waterUniforms.uTime.value = elapsed;
    if (this.streetBulbMat) {
      const night = Math.sin(1) * 0;
      // gentle flicker
      this.streetBulbMat.color.setHex(elapsed % 7 > 0.15 ? 0xffdca8 : 0xfff4dd);
    }
  }
}
