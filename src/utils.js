export const CITY = {
  roads: [-200, -100, 0, 100, 200],
  roadWidth: 18,
  blockSize: 84,
  edge: 240,
  beachStart: 240,
  shore: 302,
  gridMin: -240,
  gridMax: 240,
};

export const COLORS = {
  pink: 0xff2d95,
  cyan: 0x22e5ec,
  purple: 0x7b2cff,
  gold: 0xffd15c,
  teal: 0x0f8f9e,
  deep: 0x07050f,
};

export function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
export function lerp(a, b, t) { return a + (b - a) * t; }
export function damp(a, b, lambda, dt) { return lerp(a, b, 1 - Math.exp(-lambda * dt)); }
export function rand(a = 0, b = 1) { return a + Math.random() * (b - a); }
export function randInt(a, b) { return Math.floor(rand(a, b + 1)); }
export function choice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
export function chance(p) { return Math.random() < p; }
export function dist2(a, b) { const dx = a.x - b.x, dz = a.z - b.z; return dx * dx + dz * dz; }
export function dist(a, b) { return Math.sqrt(dist2(a, b)); }
export function angleDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
export function dampAngle(a, b, lambda, dt) { return a + angleDiff(a, b) * (1 - Math.exp(-lambda * dt)); }
export function formatMoney(n) { return '$' + Math.floor(n).toLocaleString('en-US'); }
export function formatTime(sec) {
  const m = Math.floor(Math.max(0, sec) / 60);
  const s = Math.floor(Math.max(0, sec) % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

/* ---------- canvas textures ---------- */
export function canvasTexture(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 4;
  return t;
}

export function glowTexture(color = '#ffffff', soft = 0.35) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, color);
  g.addColorStop(soft, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function signTexture(text, sub, fg, bg, width = 512, height = 128) {
  return canvasTexture(width, height, (ctx, w, h) => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeRect(9, 9, w - 18, h - 18);
    ctx.fillStyle = fg;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `bold ${Math.floor(h * 0.46)}px "Arial Black", Impact, sans-serif`;
    ctx.shadowColor = fg; ctx.shadowBlur = 22;
    ctx.fillText(text, w / 2, h * (sub ? 0.42 : 0.5));
    if (sub) {
      ctx.shadowBlur = 10;
      ctx.font = `bold ${Math.floor(h * 0.12)}px "Courier New", monospace`;
      ctx.fillText(sub, w / 2, h * 0.79);
    }
  });
}

export function windowTexture(seed) {
  const palettes = [
    ['#1a1c2e', '#ffd58a', '#ffe9c4', '#6d6f9a'],
    ['#24202f', '#8ff6ff', '#d3fbff', '#ea6ac4'],
    ['#2a1d2c', '#ffb36b', '#ffe0a8', '#ff679d'],
    ['#191e2c', '#a8c8ff', '#e4efff', '#7d66ff'],
  ];
  const p = palettes[seed % palettes.length];
  return canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = p[0]; ctx.fillRect(0, 0, w, h);
    // subtle facade bands
    ctx.fillStyle = 'rgba(255,255,255,0.025)';
    for (let i = 0; i < 8; i++) ctx.fillRect(0, i * 64, w, 2);
    const cols = 6, rows = 12;
    const mx = 16, my = 16;
    const cw = (w - mx * 2) / cols, ch = (h - my * 2) / rows;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const lit = Math.random() > 0.43;
        const wx = mx + x * cw + 4, wy = my + y * ch + 5;
        ctx.fillStyle = lit ? (Math.random() > 0.5 ? p[1] : p[2]) : '#0b0b12';
        ctx.globalAlpha = lit ? 0.55 + Math.random() * 0.45 : 0.85;
        ctx.fillRect(wx, wy, cw - 8, ch - 10);
        if (lit && Math.random() > 0.66) {
          ctx.fillStyle = p[3]; ctx.globalAlpha = 0.45;
          ctx.fillRect(wx, wy, cw - 8, (ch - 10) * Math.random());
        }
        ctx.globalAlpha = 1;
        // sill
        ctx.fillStyle = 'rgba(0,0,0,0.32)';
        ctx.fillRect(wx - 2, wy + ch - 10, cw - 4, 2);
      }
    }
    // vertical accent
    ctx.fillStyle = p[3]; ctx.globalAlpha = 0.2;
    ctx.fillRect(w * 0.42, 0, 10, h);
    ctx.globalAlpha = 1;
  }, { repeat: true });
}

export function windowEmissive(seed) {
  // derive from windowTexture logic but only lights for emissive map
  const palettes = [
    ['#000000', '#ffd58a', '#ffe9c4'],
    ['#000000', '#8ff6ff', '#d3fbff'],
    ['#000000', '#ffb36b', '#ffe0a8'],
    ['#000000', '#a8c8ff', '#e4efff'],
  ];
  const p = palettes[seed % palettes.length];
  return canvasTexture(256, 512, (ctx, w, h) => {
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
    const cols = 6, rows = 12, mx = 16, my = 16;
    const cw = (w - mx * 2) / cols, ch = (h - my * 2) / rows;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (Math.random() > 0.5) {
          ctx.fillStyle = Math.random() > 0.5 ? p[1] : p[2];
          ctx.globalAlpha = 0.5 + Math.random() * 0.5;
          ctx.fillRect(mx + x * cw + 4, my + y * ch + 5, cw - 8, ch - 10);
        }
      }
    }
  }, { repeat: true });
}

export function asphaltTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#22222a'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 5000; i++) {
      const v = Math.random() * 40 + 20;
      ctx.fillStyle = `rgba(${v},${v},${v + 4},${Math.random() * .5})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.4, 1.4);
    }
    // faint cracks
    ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      let x = Math.random() * w, y = Math.random() * h;
      ctx.moveTo(x, y);
      for (let j = 0; j < 5; j++) { x += (Math.random() - .5) * 26; y += Math.random() * 22; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, { repeat: true });
}

export function sandTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#c8a97b'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 7000; i++) {
      const v = Math.random();
      ctx.fillStyle = v > .5 ? `rgba(255,238,200,${Math.random()*.25})` : `rgba(90,65,40,${Math.random()*.22})`;
      ctx.fillRect(Math.random()*w, Math.random()*h, 1.7, 1.7);
    }
    for (let i = 0; i < 24; i++) {
      ctx.strokeStyle = `rgba(120,95,60,${Math.random()*.16})`;
      ctx.lineWidth = 1 + Math.random()*2;
      ctx.beginPath();
      const y = Math.random()*h;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(w*.3, y+rand(-9,9), w*.7, y+rand(-9,9), w, y+rand(-6,6));
      ctx.stroke();
    }
  }, { repeat: true });
}

export function concreteTexture(tint = '#b7afa3') {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = tint; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      const v = Math.random() > .5 ? 255 : 0;
      ctx.fillStyle = `rgba(${v},${v},${v},${Math.random() * .06})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    ctx.strokeStyle = 'rgba(0,0,0,.08)'; ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 32, 0); ctx.lineTo(i * 32, h);
      ctx.moveTo(0, i * 32); ctx.lineTo(w, i * 32);
      ctx.stroke();
    }
  }, { repeat: true });
}

// Three is a global injected by modules importing three; textures use THREE.
import * as THREE from 'three';
