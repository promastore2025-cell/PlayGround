import { clamp, rand } from './utils.js';

const CHORDS = [
  [45, 48, 52, 57], // Am
  [41, 45, 48, 53], // F
  [48, 52, 55, 60], // C
  [43, 47, 50, 55], // G
];
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.enabled = true;
    this.musicOn = true;
    this.nextStep = 0;
    this.stepIndex = 0;
    this.lastSchedule = 0;
    this.engine = null;
    this.siren = null;
    this.engineTarget = 0;
    this.sirenLevel = 0;
    this.noiseBuffer = null;
    this.started = false;
  }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { this.enabled = false; return; }
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.16;
    this.musicGain.connect(this.master);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.55;
    this.sfxGain.connect(this.master);

    // noise buffer
    const len = this.ctx.sampleRate * 1.2;
    this.noiseBuffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    this.startEngine();
    this.startSiren();
    this.nextStep = this.ctx.currentTime + 0.2;
    this.started = true;
  }

  /* ---------- music ---------- */
  scheduleMusic() {
    if (!this.ctx || !this.musicOn) return;
    const ahead = 0.25;
    while (this.nextStep < this.ctx.currentTime + ahead) {
      this.playStep(this.stepIndex, this.nextStep);
      this.nextStep += 0.3125; // 96 BPM eighth notes
      this.stepIndex = (this.stepIndex + 1) % 32;
    }
  }

  playStep(step, time) {
    const bar = Math.floor(step / 8) % 4;
    const inBar = step % 8;
    const chord = CHORDS[bar];

    // pad (start of each bar)
    if (inBar === 0) {
      for (const n of chord) {
        this.pad(midi(n + 12), time, 2.35, 0.05);
      }
      this.pad(midi(chord[0] + 24), time, 2.4, 0.022);
    }
    // bass
    if (inBar === 0 || inBar === 3 || inBar === 6) {
      this.bass(midi(chord[0] - 12), time, inBar === 0 ? 0.6 : 0.35, 0.12);
    }
    // arp
    const arpNotes = [chord[0] + 12, chord[1] + 12, chord[2] + 12, chord[3] + 12];
    const n = arpNotes[(step * 3) % 4];
    this.arp(midi(n + 12), time, inBar % 2 === 0 ? 0.055 : 0.03);
    // drums
    if (inBar === 0 || inBar === 4) this.kick(time);
    if (inBar === 2 || inBar === 6) this.snare(time);
    if (inBar % 2 === 1) this.hat(time, 0.028);
  }

  pad(freq, time, dur, vol) {
    const c = this.ctx;
    const g = c.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(vol, time + 0.35);
    g.gain.linearRampToValueAtTime(0, time + dur);
    const f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 1200; f.Q.value = 0.6;
    const o1 = c.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = freq;
    const o2 = c.createOscillator(); o2.type = 'sawtooth'; o2.frequency.value = freq * 1.006;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.musicGain);
    o1.start(time); o2.start(time); o1.stop(time + dur + 0.05); o2.stop(time + dur + 0.05);
  }

  bass(freq, time, dur, vol) {
    const c = this.ctx;
    const g = c.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(vol, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 420; f.Q.value = 4;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = freq;
    o.connect(f); f.connect(g); g.connect(this.musicGain);
    o.start(time); o.stop(time + dur + 0.02);
  }

  arp(freq, time, vol) {
    const c = this.ctx;
    const g = c.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(vol, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.28);
    const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = freq;
    const d = c.createDelay(); d.delayTime.value = 0.3125;
    const dg = c.createGain(); dg.gain.value = 0.32;
    o.connect(g); g.connect(this.musicGain);
    g.connect(d); d.connect(dg); dg.connect(this.musicGain);
    o.start(time); o.stop(time + 0.3);
  }

  kick(time) {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sine';
    const g = c.createGain();
    o.frequency.setValueAtTime(140, time);
    o.frequency.exponentialRampToValueAtTime(38, time + 0.13);
    g.gain.setValueAtTime(0.26, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.28);
    o.connect(g); g.connect(this.musicGain);
    o.start(time); o.stop(time + 0.3);
  }

  snare(time) {
    const c = this.ctx;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1900; f.Q.value = 0.8;
    const g = c.createGain();
    g.gain.setValueAtTime(0.13, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.17);
    s.connect(f); f.connect(g); g.connect(this.musicGain);
    s.start(time); s.stop(time + 0.2);
    const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = 180;
    const og = c.createGain(); og.gain.setValueAtTime(0.05, time); og.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
    o.connect(og); og.connect(this.musicGain); o.start(time); o.stop(time + 0.12);
  }

  hat(time, vol) {
    const c = this.ctx;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7500;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    s.connect(f); f.connect(g); g.connect(this.musicGain);
    s.start(time); s.stop(time + 0.06);
  }

  /* ---------- loops ---------- */
  startEngine() {
    const c = this.ctx;
    const o1 = c.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 60;
    const o2 = c.createOscillator(); o2.type = 'square'; o2.frequency.value = 30;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300; f.Q.value = 2;
    const g = c.createGain(); g.gain.value = 0;
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.sfxGain);
    o1.start(); o2.start();
    this.engine = { o1, o2, f, g };
  }

  startSiren() {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 700;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 2;
    const g = c.createGain(); g.gain.value = 0;
    o.connect(f); f.connect(g); g.connect(this.sfxGain);
    o.start();
    this.siren = { o, g };
  }

  updateLoop(game, dt) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const p = game.player;
    let target = 0, freq = 50;
    if (p?.inVehicle && !p.inVehicle.destroyed) {
      const ratio = clamp(Math.abs(p.inVehicle.speed) / p.inVehicle.spec.maxSpeed, 0, 1.2);
      target = 0.035 + ratio * 0.075;
      freq = 46 + ratio * 165;
    }
    this.engineTarget += (target - this.engineTarget) * Math.min(1, dt * 8);
    this.engine.g.gain.setTargetAtTime(this.engineTarget, now, 0.08);
    this.engine.o1.frequency.setTargetAtTime(freq, now, 0.1);
    this.engine.o2.frequency.setTargetAtTime(freq * 0.5, now, 0.1);
    this.engine.f.frequency.setTargetAtTime(240 + freq * 2.2, now, 0.1);

    // siren
    let nearest = 999;
    for (const v of game.vehicles) {
      if (v.driver === 'police' && !v.destroyed) {
        nearest = Math.min(nearest, Math.hypot(v.position.x - p.position.x, v.position.z - p.position.z));
      }
    }
    const sTarget = game.wanted > 0 && nearest < 110 ? clamp(1 - nearest / 110, 0, 1) * 0.045 : 0;
    this.sirenLevel += (sTarget - this.sirenLevel) * Math.min(1, dt * 4);
    this.siren.g.gain.setTargetAtTime(this.sirenLevel, now, 0.1);
    this.siren.o.frequency.setTargetAtTime(Math.sin(now * 3.2) > 0 ? 820 : 560, now, 0.02);
  }

  /* ---------- sfx ---------- */
  gunshot(kind = 'pistol') {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'lowpass';
    f.frequency.setValueAtTime(kind === 'smg' ? 3400 : 2600, t);
    f.frequency.exponentialRampToValueAtTime(300, t + 0.12);
    const g = c.createGain();
    g.gain.setValueAtTime(kind === 'smg' ? 0.3 : 0.42, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    s.connect(f); f.connect(g); g.connect(this.sfxGain);
    s.start(t); s.stop(t + 0.2);
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.1);
    const og = c.createGain(); og.gain.setValueAtTime(0.22, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    o.connect(og); og.connect(this.sfxGain); o.start(t); o.stop(t + 0.15);
  }

  reload() {
    if (!this.ctx) return;
    const c = this.ctx;
    for (let i = 0; i < 2; i++) {
      const t = c.currentTime + i * 0.17;
      const o = c.createOscillator(); o.type = 'square'; o.frequency.value = i ? 420 : 300;
      const g = c.createGain(); g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
      o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + 0.07);
    }
  }

  impact() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
    const g = c.createGain(); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    s.connect(f); f.connect(g); g.connect(this.sfxGain); s.start(t); s.stop(t + 0.1);
  }

  explosion() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(90, t + 0.8);
    const g = c.createGain(); g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
    s.connect(f); f.connect(g); g.connect(this.sfxGain); s.start(t); s.stop(t + 1.15);
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(25, t + 0.5);
    const og = c.createGain(); og.gain.setValueAtTime(0.5, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
    o.connect(og); og.connect(this.sfxGain); o.start(t); o.stop(t + 0.75);
  }

  crash(power = 0.5) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noiseBuffer;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 380;
    const g = c.createGain(); g.gain.setValueAtTime(clamp(power, 0.05, 0.4), t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    s.connect(f); f.connect(g); g.connect(this.sfxGain); s.start(t); s.stop(t + 0.25);
  }

  hurt() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(90, t + 0.2);
    const g = c.createGain(); g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + 0.24);
  }

  pickup(kind = 'health') {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const notes = kind === 'cash' ? [880, 1174, 1568] : [660, 880, 1320];
    notes.forEach((freq, i) => {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = freq;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t + i * 0.07);
      g.gain.linearRampToValueAtTime(0.09, t + i * 0.07 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.18);
      o.connect(g); g.connect(this.sfxGain); o.start(t + i * 0.07); o.stop(t + i * 0.07 + 0.2);
    });
  }

  cash() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [1200, 1600, 2000].forEach((freq, i) => {
      const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = freq;
      const g = c.createGain(); g.gain.setValueAtTime(0.05, t + i * 0.05); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.12);
      o.connect(g); g.connect(this.sfxGain); o.start(t + i * 0.05); o.stop(t + i * 0.05 + 0.14);
    });
  }

  mission() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [220, 277, 330, 440].forEach((freq, i) => {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = freq;
      const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2200;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t + i * 0.1); g.gain.linearRampToValueAtTime(0.07, t + i * 0.1 + 0.03); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.6);
      o.connect(f); f.connect(g); g.connect(this.sfxGain); o.start(t + i * 0.1); o.stop(t + i * 0.1 + 0.65);
    });
  }

  fail() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [330, 262, 196].forEach((freq, i) => {
      const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = freq;
      const g = c.createGain(); g.gain.setValueAtTime(0.08, t + i * 0.15); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.15 + 0.4);
      o.connect(g); g.connect(this.sfxGain); o.start(t + i * 0.15); o.stop(t + i * 0.15 + 0.45);
    });
  }

  wanted() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'square'; o.frequency.setValueAtTime(440, t); o.frequency.setValueAtTime(660, t + 0.12);
    const g = c.createGain(); g.gain.setValueAtTime(0.05, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + 0.3);
  }

  jump() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(280, t); o.frequency.exponentialRampToValueAtTime(620, t + 0.1);
    const g = c.createGain(); g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + 0.13);
  }

  ui() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 900;
    const g = c.createGain(); g.gain.setValueAtTime(0.03, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + 0.06);
  }

  update(game, dt) {
    if (!this.ctx) return;
    this.scheduleMusic();
    this.updateLoop(game, dt);
  }
}
