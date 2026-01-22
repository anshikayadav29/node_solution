// snapshot.js
class State {
  constructor() {
    this.val = 0;
    this.snapshots = [];
  }

  inc() { this.val++; }
  snapshot() { this.snapshots.push(this.val); }
  restore(i) { this.val = this.snapshots[i]; }
}
