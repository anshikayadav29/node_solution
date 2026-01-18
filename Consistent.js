// consistent-hash.js
class HashRing {
  constructor() { this.nodes = []; }
  add(node) { this.nodes.push(node); }
  get(key) {
    return this.nodes[key.length % this.nodes.length];
  }
}
