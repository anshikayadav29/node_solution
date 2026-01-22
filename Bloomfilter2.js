// bloom.js
class Bloom {
  constructor() { this.bits = Array(100).fill(false); }
  add(v) { this.bits[v.length % 100] = true; }
  has(v) { return this.bits[v.length % 100]; }
}
