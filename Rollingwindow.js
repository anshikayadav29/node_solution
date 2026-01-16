// rolling-window.js
class Counter {
  constructor(window) {
    this.window = window;
    this.events = [];
  }

  hit() {
    const now = Date.now();
    this.events.push(now);
    this.events = this.events.filter(t => now - t < this.window);
    return this.events.length;
  }
}
