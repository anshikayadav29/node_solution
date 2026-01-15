// lru-cache.js
class LRU {
  constructor(limit = 3) {
    this.map = new Map();
    this.limit = limit;
  }
  get(k) {
    if (!this.map.has(k)) return null;
    const v = this.map.get(k);
    this.map.delete(k);
    this.map.set(k, v);
    return v;
  }
  set(k, v) {
    if (this.map.size >= this.limit) {
      this.map.delete(this.map.keys().next().value);
    }
    this.map.set(k, v);
  }
}
