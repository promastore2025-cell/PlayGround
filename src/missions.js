import * as THREE from 'three';
import { clamp, dist, formatTime, rand, choice, chance } from './utils.js';
import { Enemy } from './characters.js';
import { Vehicle } from './vehicles.js';

const START = { x: 222, z: 84 };
const HIDEOUT = { x: 222, z: -190 };

export const MISSIONS = [
  {
    id: 1,
    name: 'Sunset Run',
    kicker: 'JOB 01 — OCEAN DRIVE',
    brief: 'Steal the yellow Stinger and deliver it to the marina before the owner notices.',
    reward: 750,
    steps: [
      { type: 'vehicle', car: 'stinger', spawn: { x: 204.5, z: 96 }, heading: Math.PI, objective: 'Steal the yellow Stinger parked on Ocean Drive.', label: 'STINGER' },
      { type: 'goto', pos: { x: 220, z: 58 }, radius: 10, inCar: true, carLock: true, objective: 'Deliver the Stinger to the marina drop-off.', label: 'DROP' },
    ],
  },
  {
    id: 2,
    name: 'Dead Drop',
    kicker: 'JOB 02 — VICE DOCKS',
    brief: 'Three packages. Two minutes. The Sharks are watching every corner.',
    reward: 1000,
    steps: [
      {
        type: 'collect', time: 120,
        items: [{ x: 0, z: 208 }, { x: 208, z: 0 }, { x: 0, z: -108 }],
        objective: 'Collect the packages scattered across the city.',
      },
      { type: 'goto', pos: { x: -152, z: -98 }, radius: 10, objective: 'Drop the packages at the docks warehouse.', label: 'DROP' },
    ],
  },
  {
    id: 3,
    name: 'Neon Rush',
    kicker: 'JOB 03 — STREET RACING',
    brief: 'A pink slip race through the neon grid. Hit every gate. Don\'t stop for cops.',
    reward: 1500,
    steps: [
      {
        type: 'checkpoints', time: 95, radius: 8, inCar: true,
        points: [
          { x: 200, z: 150 }, { x: 100, z: 0 }, { x: 100, z: -100 },
          { x: 0, z: -100 }, { x: -100, z: 0 }, { x: 0, z: 100 }, { x: 200, z: 100 },
        ],
        objective: 'Race through the checkpoints. Hit every gate in order.',
      },
    ],
  },
  {
    id: 4,
    name: 'Clean Sweep',
    kicker: 'JOB 04 — SHARK TERRITORY',
    brief: 'The Sharks are meeting in the park. End the meeting. Permanently.',
    reward: 2200,
    steps: [
      { type: 'goto', pos: { x: 50, z: -150 }, radius: 34, objective: 'Get to the park and shut down the Shark meeting.', label: 'PARK' },
      {
        type: 'kill', center: { x: 50, z: -150 },
        spawns: [
          { x: 32, z: -172 }, { x: 70, z: -166 }, { x: 28, z: -132 },
          { x: 72, z: -134 }, { x: 52, z: -112 },
        ],
        objective: 'Take out all five Sharks.',
      },
    ],
  },
  {
    id: 5,
    name: 'The Big Score',
    kicker: 'JOB 05 — VICE CITY BANK',
    brief: 'One last job. The bank vault is open. The guards are not. Get the cash and disappear.',
    reward: 6000,
    steps: [
      { type: 'goto', pos: { x: -50, z: 150 }, radius: 36, objective: 'Meet the crew at the bank plaza.', label: 'BANK' },
      {
        type: 'kill', center: { x: -50, z: 150 },
        spawns: [
          { x: -72, z: 132 }, { x: -28, z: 132 }, { x: -72, z: 168 },
          { x: -28, z: 168 }, { x: -50, z: 118 }, { x: -50, z: 182 },
        ],
        objective: 'Take out the bank guards.',
      },
      { type: 'goto', pos: { x: -38, z: 150 }, radius: 3.2, objective: 'Grab the briefcase of cash.', label: '$', briefcase: true },
      { type: 'escape', time: 40, stars: 3, objective: 'Lose the heat and survive until the coast is clear.' },
      { type: 'goto', pos: HIDEOUT, radius: 10, objective: 'Reach the beach hideout with the cash.', label: 'SAFE' },
    ],
  },
];

export class MissionSystem {
  constructor(game) {
    this.game = game;
    this.index = 0;
    this.active = null;
    this.stepIndex = 0;
    this.timeLeft = 0;
    this.nearStart = false;
    this.cooldown = 0;
    this.markers = [];
    this.enemies = [];
    this.missionCar = null;
    this.collected = 0;
    this.checkpointIndex = 0;
    this.escapeDone = false;
    this.briefcaseMarker = null;
    this.finished = false;
    this.startMarker = game.effects.addMarker(START, { color: 0xff2d95, label: 'M', radius: 2.0 });
    this.startMarker.setVisible(true);
    this.setStartPosition();
    this.updateStartMarker();
  }

  get mission() { return MISSIONS[this.index]; }

  setStartPosition() {
    const m = this.mission;
    if (!m) return;
    this.startMarker.setPosition?.(START);
  }

  clearMarkers() {
    for (const m of this.markers) m.dispose?.();
    this.markers = [];
    this.objectiveMarker = null;
  }

  addMarker(pos, opts) {
    const m = this.game.effects.addMarker(pos, opts);
    this.markers.push(m);
    if (!this.objectiveMarker) this.objectiveMarker = m;
    return m;
  }

  updateStartMarker() {
    this.startMarker.setVisible(!this.active && !this.finished && this.cooldown <= 0);
  }

  update(dt) {
    const g = this.game;
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.active) {
      this.updateMission(dt);
      return;
    }
    this.updateStartMarker();
    if (this.finished) {
      this.nearStart = false;
      g.hud.setObjective('Vice City is yours. Cruise the strip and enjoy the sunset.', 'FREE ROAM', '');
      g.hud.setMissionName('Free Roam');
      return;
    }
    if (this.mission) {
      const d = dist(g.player.position, START);
      this.nearStart = d < 5.5 && !g.player.inVehicle && this.cooldown <= 0;
      if (this.nearStart) {
        g.hud.setObjective(`Press E to start "${this.mission.name}".`, this.mission.kicker, '');
        g.hud.setMissionName(this.mission.name);
      } else if (this.cooldown > 0) {
        g.hud.setObjective('The job is blown. Return to the pink marker to try again.', 'COOLDOWN', '');
        g.hud.setMissionName('Free Roam');
      } else {
        g.hud.setObjective('Explore the strip, grab a ride, and look for the pink marker on Ocean Drive.', 'FREE ROAM', '');
        g.hud.setMissionName('Free Roam');
      }
    }
  }

  tryStart() {
    if (!this.active && this.nearStart && this.mission && this.cooldown <= 0) {
      this.startMission();
      return true;
    }
    return false;
  }

  startMission() {
    const g = this.game;
    this.active = this.mission;
    this.nearStart = false;
    this.stepIndex = 0;
    this.timeLeft = 0;
    this.collected = 0;
    this.checkpointIndex = 0;
    this.escapeDone = false;
    this.startMarker.setVisible(false);
    this.clearMarkers();
    g.hud.showBanner(this.active.kicker, this.active.name, this.active.brief, 4.2);
    g.hud.setMissionName(this.active.name);
    g.audio?.mission();
    g.missionsStarted = (g.missionsStarted || 0) + 1;
    this.beginStep();
  }

  beginStep() {
    const g = this.game;
    const step = this.active.steps[this.stepIndex];
    if (!step) { this.completeMission(); return; }
    this.stepTime = 0;
    this.timeLeft = step.time || 0;
    this.stepState = {};
    this.clearMarkers();

    if (step.type === 'goto') {
      this.addMarker(step.pos, { color: step.briefcase ? 0x7dff8e : 0xffd15c, label: step.label || '!', radius: 2.6 });
      this.baseObjective = step.objective;
    } else if (step.type === 'vehicle') {
      if (!this.missionCar || this.missionCar.destroyed) {
        this.missionCar = new Vehicle(g, step.car, step.spawn, step.heading || 0);
        this.missionCar.driver = null;
        this.missionCar.mission = true;
        g.vehicles.push(this.missionCar);
      }
      this.addMarker(this.missionCar.position, { color: 0xff2d95, label: 'CAR', radius: 2.2 });
      this.baseObjective = step.objective;
    } else if (step.type === 'collect') {
      this.collectMarkers = step.items.map((p, i) => {
        const m = this.addMarker(p, { color: 0x7dff8e, label: 'PKG', radius: 2.2 });
        m.index = i;
        m.collected = false;
        return m;
      });
      this.baseObjective = `${step.objective} 0/${step.items.length}`;
    } else if (step.type === 'checkpoints') {
      this.cpMarker = this.addMarker(step.points[0], { color: 0x22e5ec, label: 'GO', radius: 4 });
      this.baseObjective = `${step.objective} 1/${step.points.length}`;
    } else if (step.type === 'kill') {
      this.spawnEnemies(step.spawns);
      this.addMarker(step.center, { color: 0xff2d95, label: 'TARGET', radius: 3 });
      this.baseObjective = step.objective;
    } else if (step.type === 'escape') {
      g.setWanted(step.stars, true);
      this.escapeDone = false;
      this.baseObjective = step.objective;
    }
    g.hud.setObjective(this.baseObjective || step.objective, this.active.kicker, this.timeLeft ? formatTime(this.timeLeft) : '');
    g.hud.setMissionName(this.active.name);
  }

  spawnEnemies(spawns) {
    for (const s of spawns) {
      const e = new Enemy(this.game, s, { health: 65 });
      this.enemies.push(e);
      this.game.enemies.push(e);
    }
  }

  clearStep() {
    this.clearMarkers();
    for (const e of this.enemies) {
      if (!e.dead) {
        this.game.scene.remove(e.group);
        e.group.traverse(o => { if (o.geometry) o.geometry.dispose?.(); });
      }
    }
    this.enemies = this.enemies.filter(e => e.dead);
    // leave dead bodies for 10 seconds via game cleanup? remove them too for readability
    for (const e of this.enemies) {
      this.game.scene.remove(e.group);
    }
    this.game.enemies = this.game.enemies.filter(e => !this.enemies.includes(e));
    this.enemies = [];
  }

  advanceStep() {
    this.clearStep();
    this.stepIndex++;
    const step = this.active?.steps[this.stepIndex];
    if (!step) { this.completeMission(); return; }
    this.game.audio?.ui();
    this.beginStep();
  }

  updateMission(dt) {
    const g = this.game;
    const step = this.active.steps[this.stepIndex];
    if (!step) return;
    this.stepTime += dt;
    if (step.time) {
      this.timeLeft -= dt;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        if (step.type !== 'escape') {
          this.fail('Out of time.', true);
          return;
        }
      }
    }

    if (step.type === 'vehicle') {
      const p = g.player;
      if (p.inVehicle === this.missionCar) {
        g.hud.toast('Stinger acquired — get to the marina', 'pink');
        this.advanceStep();
        return;
      }
      if (this.missionCar.destroyed) { this.fail('The Stinger was wrecked.', true); return; }
      // keep marker on car
      if (this.objectiveMarker) {
        const d = dist(p.position, this.missionCar.position);
        if (d < 3.5 && !p.inVehicle) g.hud.setPrompt('Enter the Stinger');
      }
    } else if (step.type === 'goto') {
      const p = g.player;
      const d = dist(p.position, step.pos);
      const wrongCar = step.carLock && this.missionCar && p.inVehicle !== this.missionCar;
      const inRequiredCar = (!step.inCar || Boolean(p.inVehicle)) && !wrongCar;
      if (d < step.radius && inRequiredCar) {
        if (step.briefcase) {
          g.hud.toast('Briefcase secured — now lose the cops', 'gold');
          g.audio?.cash();
          if (this.briefcaseMarker) this.briefcaseMarker.setVisible(false);
        }
        this.advanceStep();
        return;
      }
      if (step.inCar && !p.inVehicle && d < step.radius + 8) {
        g.hud.toast('Get back in a vehicle to make the drop', '');
      } else if (wrongCar && d < step.radius + 8) {
        g.hud.toast('You need the Stinger for this drop', 'pink');
      }
    } else if (step.type === 'collect') {
      const p = g.player;
      for (const m of this.collectMarkers) {
        if (m.collected) continue;
        if (dist(p.position, m.pos) < 3.2) {
          m.collected = true;
          m.setVisible(false);
          this.collected++;
          g.audio?.pickup('cash');
          g.effects?.sparks(new THREE.Vector3(m.pos.x, m.pos.y + 1, m.pos.z), 12, 0x7dff8e);
          g.hud.toast(`Package ${this.collected}/${step.items.length} secured`, 'gold');
          this.baseObjective = `${step.objective} ${this.collected}/${step.items.length}`;
          break;
        }
      }
      if (this.collected >= step.items.length) {
        g.hud.toast('All packages collected', 'gold');
        this.advanceStep();
        return;
      }
    } else if (step.type === 'checkpoints') {
      const p = g.player;
      if (!p.inVehicle) {
        this.baseObjective = `${step.objective} Get a vehicle!`;
      } else {
        const target = step.points[this.checkpointIndex];
        if (dist(p.position, target) < step.radius) {
          this.checkpointIndex++;
          g.audio?.ui();
          g.effects?.sparks(new THREE.Vector3(target.x, 1, target.z), 18, 0x22e5ec);
          if (this.checkpointIndex >= step.points.length) {
            g.hud.toast('Race won', 'gold');
            this.advanceStep();
            return;
          }
          this.cpMarker.setPosition(step.points[this.checkpointIndex]);
          this.baseObjective = `${step.objective} ${this.checkpointIndex + 1}/${step.points.length}`;
          g.hud.toast(`Checkpoint ${this.checkpointIndex}/${step.points.length}`, '');
        }
      }
    } else if (step.type === 'kill') {
      const alive = this.enemies.filter(e => !e.dead).length;
      this.baseObjective = `${step.objective} ${step.spawns.length - alive}/${step.spawns.length}`;
      if (alive === 0 && this.enemies.length > 0) {
        g.hud.toast('All targets down', 'pink');
        this.advanceStep();
        return;
      }
    } else if (step.type === 'escape') {
      if (this.stepTime > 2 && g.player.health < 100) {
        // keep pressure on
      }
      if (this.timeLeft <= 0) {
        g.hud.toast('The heat is off — get to the hideout', 'gold');
        this.advanceStep();
        return;
      }
      if (g.wanted === 0) {
        g.setWanted(step.stars, true, true);
      }
      this.baseObjective = `${step.objective} ${formatTime(this.timeLeft)}`;
    }

    g.hud.setObjective(this.baseObjective, this.active.kicker, this.timeLeft ? formatTime(this.timeLeft) : '');
  }

  onEnemyKilled() {
    // handled in updateMission
  }

  fail(reason, notify = true) {
    if (!this.active) return;
    const g = this.game;
    this.clearStep();
    this.active = null;
    this.missionCar = null;
    this.cooldown = 6;
    this.escapeDone = false;
    if (notify) {
      g.hud.showBanner('JOB FAILED', 'MISSION FAILED', reason, 3.6);
      g.audio?.fail();
    }
    g.hud.setMissionName('Free Roam');
    g.hud.setObjective('Return to the pink marker on Ocean Drive to try the job again.', 'COOLDOWN', '');
    g.hud.setPrompt(null);
  }

  onPlayerDeath() {
    if (this.active) this.fail('You were wasted.', false);
  }

  completeMission() {
    const g = this.game;
    const m = this.active;
    if (!m) return;
    this.clearStep();
    this.active = null;
    this.missionCar = null;
    g.money += m.reward;
    g.missionsDone = (g.missionsDone || 0) + 1;
    g.audio?.cash();
    g.audio?.mission();
    g.hud.setObjective(`Job complete. ${m.reward ? `$${m.reward.toLocaleString()} wired to your account.` : ''}`, 'VICE CITY', '');
    g.hud.setMissionName('Free Roam');
    g.setWanted(0, false, true);
    g.hud.showMissionComplete(m.name, m.reward, () => {
      this.index = Math.min(this.index + 1, MISSIONS.length - 1);
      if (this.index >= MISSIONS.length - 1 && g.missionsDone >= MISSIONS.length) {
        this.finished = true;
        this.startMarker.setVisible(false);
        g.hud.showBanner('THE END', 'CITY IS YOURS', 'Final score secured. Vice City belongs to you.', 6);
        g.hud.subtitle('Thanks for playing Vice City — Neon Nights', 7);
        g.finished = true;
      } else {
        this.index = g.missionsDone;
        this.cooldown = 1.5;
        this.startMarker.setPosition?.(START);
        this.startMarker.setVisible(true);
        g.hud.showBanner('JOB AVAILABLE', MISSIONS[this.index].name, MISSIONS[this.index].brief, 3.6);
        g.hud.setPrompt(null);
      }
    });
  }
}
