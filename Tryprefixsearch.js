// trie.js
class Trie {
  constructor() { this.root = {}; }
  insert(w) {
    let n = this.root;
    for (const c of w) n = n[c] ||= {};
    n.end = true;
  }
}
