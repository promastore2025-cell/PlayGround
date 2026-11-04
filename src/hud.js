import { CITY, clamp, formatMoney, formatTime } from './utils.js';

const STAR = `<svg class="star" viewBox="0 0 24 24"><path d="M12 1.6l3.1 6.6 7.1 1-5.2 5.1 1.3 7.2L12 18l-6.3 3.5 1.3-7.2L1.8 9.2l7.1-1z" fill="#ffcf3f" stroke="#7a4b00" stroke-width="1"/></svg>`;

export class HUD {
  constructor(game) {
    this.game = game;
    this.el = {};
    const ids = [
      'minimap', 'bigmap', 'health-fill', 'health-num', 'armor-fill', 'armor-num', 'money', 'time',
      'wanted', 'objective-text', 'objective-kicker', 'objective-timer', 'objective', 'mission-name',
      'toasts', 'prompt', 'prompt-text', 'banner', 'banner-kicker', 'banner-title', 'banner-sub', 'subtitle',
      'weapon-panel', 'weapon-name', 'ammo-mag', 'ammo-reserve', 'vehicle-hud', 'speed', 'sp-fill', 'car-name',
      'radio', 'track', 'damage-flash', 'crosshair', 'district', 'help', 'pause-screen', 'pause-sub',
      'p-missions', 'p-money', 'p-wanted', 'map-screen', 'death-screen', 'death-loss', 'mission-screen',
      'ms-kicker', 'ms-title', 'ms-sub', 'health-row', 'ammo-mag',
    ];
    for (const id of ids) this.el[id] = document.getElementById(id);
    this.mm = this.el.minimap.getContext('2d');
    this.big = this.el.bigmap.getContext('2d');
    this.el.wanted.innerHTML = Array(5).fill(STAR).join('');
    this.stars = [...this.el.wanted.querySelectorAll('.star')];
    this.lastWanted = -1;
    this.lastObjective = '';
    this.objectiveUrgent = false;
    this.mmTimer = 0;
    this.bigTimer = 0;
    this.dmgTimer = 0;
    this.promptVisible = false;
    this.bannerTimer = 0;
    this.districtTimer = 0;
    this.radioIndex = 0;
    this.radioTimer = 0;
    this.tracks = ['MIDNIGHT DRIVE', 'NEON HEART', 'OCEAN DRIVE', 'PALM SHADOWS', 'AFTERGLOW', 'VICE NIGHTS'];
    this.el.track.textContent = this.tracks[0];
  }

  update(dt) {
    const g = this.game;
    const p = g.player;
    if (!p) return;

    this.el['health-fill'].style.width = `${clamp(p.health, 0, 100)}%`;
    this.el['health-num'].textContent = Math.ceil(p.health);
    this.el['health-row'].classList.toggle('critical', p.health < 30);
    this.el['armor-fill'].style.width = `${clamp(p.armor, 0, 100)}%`;
    this.el['armor-num'].textContent = Math.ceil(p.armor);
    this.el.money.textContent = formatMoney(g.money);
    this.el.time.textContent = g.clockString();

    if (g.wanted !== this.lastWanted) {
      this.lastWanted = g.wanted;
      this.stars.forEach((s, i) => s.classList.toggle('on', i < g.wanted));
    }

    // weapons / vehicle hud
    if (p.inVehicle) {
      document.body.classList.add('driving');
      this.el['weapon-panel'].classList.add('hidden');
      this.el['vehicle-hud'].classList.remove('hidden');
      const kmh = Math.round(Math.abs(p.inVehicle.speed) * 3.6);
      this.el.speed.textContent = kmh;
      const ratio = clamp(Math.abs(p.inVehicle.speed) / (p.inVehicle.spec.maxSpeed * 1.1), 0, 1);
      this.el['sp-fill'].style.strokeDasharray = `${ratio * 245} 327`;
      this.el['car-name'].textContent = p.inVehicle.name;
      if (p.inVehicle.destroyed) this.el['car-name'].textContent = 'WRECKED';
      this.radioTimer += dt;
      if (this.radioTimer > 24) {
        this.radioTimer = 0;
        this.radioIndex = (this.radioIndex + 1) % this.tracks.length;
        this.el.track.textContent = this.tracks[this.radioIndex];
      }
    } else {
      document.body.classList.remove('driving');
      this.el['weapon-panel'].classList.remove('hidden');
      this.el['vehicle-hud'].classList.add('hidden');
      this.el['weapon-name'].textContent = p.reloading > 0 ? 'RELOADING' : p.weapon.name;
      this.el['ammo-mag'].textContent = p.weapon.mag;
      this.el['ammo-reserve'].textContent = p.weapon.reserve;
      this.el['ammo-mag'].parentElement.classList.toggle('low', p.weapon.mag <= 3);
    }

    this.dmgTimer = Math.max(0, this.dmgTimer - dt);
    this.el['damage-flash'].style.opacity = this.dmgTimer > 0 ? Math.min(0.85, this.dmgTimer * 2.6) : 0;

    this.districtTimer -= dt;
    if (this.districtTimer <= 0) {
      this.districtTimer = 0.4;
      this.el.district.textContent = g.city.districtAt(p.position.x, p.position.z);
    }

    this.mmTimer -= dt;
    if (this.mmTimer <= 0) {
      this.mmTimer = 0.06;
      this.drawMinimap();
    }
    if (!this.el['map-screen'].classList.contains('hidden')) {
      this.bigTimer -= dt;
      if (this.bigTimer <= 0) { this.bigTimer = 0.2; this.drawBigMap(); }
    }

    if (this.bannerTimer > 0) {
      this.bannerTimer -= dt;
      if (this.bannerTimer <= 0) this.el.banner.classList.add('hidden');
    }
  }

  setObjective(text, kicker = 'VICE BEACH', timer = '') {
    if (text !== this.lastObjective) {
      this.lastObjective = text;
      this.el['objective-text'].textContent = text;
      this.el.objective.style.opacity = 1;
    }
    this.el['objective-kicker'].textContent = kicker;
    this.el['objective-timer'].textContent = timer;
    this.el.objective.classList.toggle('urgent', Boolean(timer) && !timer.includes('—'));
  }

  setMissionName(name) { this.el['mission-name'].textContent = name; }

  toast(text, type = '') {
    const d = document.createElement('div');
    d.className = 'toast ' + type;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    setTimeout(() => d.remove(), 3200);
    if (this.el.toasts.children.length > 4) this.el.toasts.firstChild.remove();
  }

  showBanner(kicker, title, sub = '', duration = 3.4) {
    this.el['banner-kicker'].textContent = kicker;
    this.el['banner-title'].textContent = title;
    this.el['banner-sub'].textContent = sub;
    this.el.banner.classList.remove('hidden');
    this.el.banner.style.animation = 'none';
    void this.el.banner.offsetWidth;
    this.el.banner.style.animation = '';
    this.bannerTimer = duration;
  }

  subtitle(text, duration = 3) {
    this.el.subtitle.textContent = text;
    this.el.subtitle.classList.add('on');
    clearTimeout(this._subT);
    this._subT = setTimeout(() => this.el.subtitle.classList.remove('on'), duration * 1000);
  }

  setPrompt(text) {
    if (!text) {
      this.el.prompt.classList.add('hidden');
      this.promptVisible = false;
      return;
    }
    if (this.promptVisible && this.el['prompt-text'].textContent === text) return;
    this.el['prompt-text'].textContent = text;
    this.el.prompt.classList.remove('hidden');
    this.promptVisible = true;
  }

  damage() {
    this.dmgTimer = 0.35;
    this.el['damage-flash'].style.opacity = 0.7;
  }

  hitMarker() {
    this.el.crosshair.classList.add('hit');
    clearTimeout(this._hitT);
    this._hitT = setTimeout(() => this.el.crosshair.classList.remove('hit'), 120);
  }

  toggleHelp(force) {
    const show = force ?? this.el.help.classList.contains('hidden');
    this.el.help.classList.toggle('hidden', !show);
    return show;
  }

  toggleMap() {
    const show = this.el['map-screen'].classList.contains('hidden');
    this.el['map-screen'].classList.toggle('hidden', !show);
    if (show) this.drawBigMap();
    return show;
  }

  closeMap() { this.el['map-screen'].classList.add('hidden'); }

  showPause(show, missionsDone = 0) {
    this.el['pause-screen'].classList.toggle('hidden', !show);
    if (show) {
      this.el['p-missions'].textContent = `${missionsDone} / 5`;
      this.el['p-money'].textContent = formatMoney(this.game.money);
      this.el['p-wanted'].textContent = this.game.wanted > 0 ? '★'.repeat(this.game.wanted) : 'CLEAN';
    }
  }

  showMissionComplete(title, reward, callback) {
    const s = this.el['mission-screen'];
    this.el['ms-kicker'].textContent = 'MISSION COMPLETE';
    this.el['ms-title'].textContent = title;
    this.el['ms-sub'].textContent = `Reward: ${formatMoney(reward)}`;
    s.classList.remove('hidden');
    setTimeout(() => {
      s.classList.add('hidden');
      callback?.();
    }, 3600);
  }

  showDeath(loss, callback) {
    const s = this.el['death-screen'];
    this.el['death-loss'].textContent = formatMoney(loss);
    s.classList.remove('hidden');
    setTimeout(() => {
      s.classList.add('hidden');
      callback?.();
    }, 3400);
  }

  /* ---------------- minimap ---------------- */
  drawMapBase(ctx, w, h, scale, cx, cz, detailed = false) {
    const s = scale;
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(s, s);
    ctx.translate(-cx, -cz);
    // water
    ctx.fillStyle = '#082832';
    ctx.fillRect(cx - w / 2 / s - 50, cz - h / 2 / s - 50, w / s + 100, h / s + 100);
    // land
    ctx.fillStyle = '#25302d';
    ctx.fillRect(-243, -243, 486, 486);
    // beach
    ctx.fillStyle = '#7a6646';
    ctx.fillRect(243, -243, 70, 486);
    // pier
    ctx.fillStyle = '#6b5138';
    ctx.fillRect(302, 56, 80, 16);
    // blocks (sidewalk)
    ctx.fillStyle = '#33403b';
    for (const b of this.game.city.blocks) ctx.fillRect(b.cx - 42, b.cz - 42, 84, 84);
    // special zones
    ctx.fillStyle = '#2f5a3b';
    ctx.fillRect(50 - 35, -150 - 35, 70, 70);
    // roads
    ctx.strokeStyle = '#6d716e';
    ctx.lineWidth = 18;
    ctx.lineCap = 'butt';
    for (const r of CITY.roads) {
      ctx.beginPath(); ctx.moveTo(r, -243); ctx.lineTo(r, 243); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-243, r); ctx.lineTo(243, r); ctx.stroke();
    }
    // center lines
    if (detailed) {
      ctx.strokeStyle = 'rgba(230,226,207,0.55)';
      ctx.lineWidth = 0.55;
      ctx.setLineDash([4, 6]);
      for (const r of CITY.roads) {
        ctx.beginPath(); ctx.moveTo(r, -243); ctx.lineTo(r, 243); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-243, r); ctx.lineTo(243, r); ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    // buildings (from colliders for footprint)
    if (detailed) {
      ctx.fillStyle = '#1b2320';
      for (const c of this.game.city.colliders) {
        ctx.fillRect(c.minX, c.minZ, c.maxX - c.minX, c.maxZ - c.minZ);
      }
    }
    // label districts
    if (detailed) {
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.font = `bold ${11 / s}px Rajdhani, sans-serif`;
      ctx.textAlign = 'center';
      const labels = [['OCEAN BEACH', 210, 0], ['DOWNTOWN', -50, -50], ['VICE DOCKS', -150, -150], ['VICE POINT', 340, 64], ['NORTH POINT', 0, -215], ['SOUTH BEACH', 0, 215], ['WEST HEIGHTS', -205, 0]];
      for (const [t, x, z] of labels) ctx.fillText(t, x, z);
    }
    ctx.restore();
  }

  drawPoints(ctx, w, h, scale, cx, cz, detailed = false) {
    const g = this.game;
    const s = scale;
    const toScreen = (x, z) => [w / 2 + (x - cx) * s, h / 2 + (z - cz) * s];
    // vehicles
    for (const v of g.vehicles) {
      if (v.destroyed) continue;
      const [x, y] = toScreen(v.position.x, v.position.z);
      if (x < -10 || y < -10 || x > w + 10 || y > h + 10) continue;
      if (v.driver === 'police') {
        ctx.fillStyle = '#2f7bff';
        ctx.beginPath(); ctx.arc(x, y, detailed ? 3.4 : 2.8, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(47,123,255,0.35)'; ctx.lineWidth = 2; ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(224,224,214,0.65)';
        ctx.beginPath(); ctx.arc(x, y, detailed ? 2.2 : 1.7, 0, Math.PI * 2); ctx.fill();
      }
    }
    // enemies
    for (const e of g.enemies) {
      if (e.dead) continue;
      const [x, y] = toScreen(e.position.x, e.position.z);
      ctx.fillStyle = '#ff3b4e';
      ctx.beginPath(); ctx.arc(x, y, detailed ? 3.4 : 2.6, 0, Math.PI * 2); ctx.fill();
    }
    // mission marker
    const mm = g.missions;
    if (mm?.startMarker?.active) {
      const [x, y] = toScreen(mm.startMarker.pos.x, mm.startMarker.pos.z);
      this.drawMarkerDot(ctx, x, y, '#ff2d95', 'M', detailed);
    }
    if (mm?.objectiveMarker?.active) {
      const [x, y] = toScreen(mm.objectiveMarker.pos.x, mm.objectiveMarker.pos.z);
      this.drawMarkerDot(ctx, x, y, '#ffd15c', '!', detailed);
    }
    if (mm?.briefcaseMarker?.active) {
      const [x, y] = toScreen(mm.briefcaseMarker.pos.x, mm.briefcaseMarker.pos.z);
      this.drawMarkerDot(ctx, x, y, '#7dff8e', '$', detailed);
    }
    // player
    const p = g.player;
    const [px, py] = toScreen(p.position.x, p.position.z);
    ctx.save();
    ctx.translate(px, py);
    const hdg = p.inVehicle ? p.inVehicle.heading : p.heading;
    ctx.rotate(Math.PI - hdg);
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(6, 6); ctx.lineTo(0, 3); ctx.lineTo(-6, 6); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();
  }

  drawMarkerDot(ctx, x, y, color, label, detailed) {
    const r = detailed ? 10 : 7;
    ctx.save();
    ctx.shadowColor = color; ctx.shadowBlur = 14;
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#140a20';
    ctx.font = `bold ${detailed ? 12 : 9}px "Arial Black", sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y + 0.5);
  }

  drawMinimap() {
    const ctx = this.mm;
    const w = 420, h = 420;
    const p = this.game.player;
    const scale = 1.75;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 2, 0, Math.PI * 2);
    ctx.clip();
    this.drawMapBase(ctx, w, h, scale, p.position.x, p.position.z);
    this.drawPoints(ctx, w, h, scale, p.position.x, p.position.z);
    // edge fade
    const grad = ctx.createRadialGradient(w / 2, h / 2, w * 0.34, w / 2, h / 2, w * 0.5);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(4,8,12,0.55)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  drawBigMap() {
    const ctx = this.big;
    const w = 900, h = 900;
    const p = this.game.player;
    const scale = 900 / 520;
    ctx.clearRect(0, 0, w, h);
    this.drawMapBase(ctx, w, h, scale, 0, 0, true);
    this.drawPoints(ctx, w, h, scale, 0, 0, true);
    // frame
    ctx.strokeStyle = 'rgba(255,255,255,.14)'; ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, w - 3, h - 3);
    // scale bar
    ctx.fillStyle = 'rgba(255,255,255,.35)';
    ctx.font = '16px "Share Tech Mono", monospace';
    ctx.fillText('0        100m', 30, h - 26);
    ctx.fillRect(30, h - 40, 100 * scale / 2, 3);
  }
}
