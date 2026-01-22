// pubsub.js
class Broker {
  constructor() { this.subs = {}; }
  sub(topic, fn) { (this.subs[topic] ||= []).push(fn); }
  pub(topic, msg) {
    (this.subs[topic] || []).forEach(f => f(msg));
  }
}
