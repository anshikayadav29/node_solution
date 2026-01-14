// bloom.js
class Bloom{
  constructor(m=64){this.b=new Uint8Array(m)}
  h(s,i){let r=0;for(const c of s)r=(r*31+c.charCodeAt(0)+i)%this.b.length;return r}
  add(s){[1,2,3].forEach(i=>this.b[this.h(s,i)]=1)}
  has(s){return [1,2,3].every(i=>this.b[this.h(s,i)])}
}
