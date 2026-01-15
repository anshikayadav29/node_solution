// event-store.js
class Store {
  constructor() { this.events = []; }
  add(e) { this.events.push({ e, time: Date.now() }); }
  replay(fn) { this.events.forEach(x => fn(x.e)); }
}
