// trie.js
class Trie{constructor(){this.c={}}add(w){let n=this.c;for(const x of w)n=n[x]||(n[x]={});n.$=1}
has(p){let n=this.c;for(const x of p){if(!n[x])return false;n=n[x]}return true}}
