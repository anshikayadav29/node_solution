// event-system.js
class EventBus {
  constructor() {
    this.events = {};
  }

  on(e, fn) {
    (this.events[e] ||= []).push(fn);
  }

  emit(e, data) {
    (this.events[e] || []).forEach(fn => fn(data));
  }

  once(e, fn) {
    const wrap = d => {
      fn(d);
      this.events[e] = this.events[e].filter(f => f !== wrap);
    };
    this.on(e, wrap);
  }
}

// demo
const bus = new EventBus();
bus.once("msg", d => console.log("Once:", d));
bus.emit("msg", 1);
bus.emit("msg", 2);
