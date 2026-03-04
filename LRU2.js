const fs = require("fs");
class LRU{
  constructor(n){this.n=n;this.m=new Map();}
  get(k){ if(!this.m.has(k))return;
    const v=this.m.get(k); this.m.delete(k); this.m.set(k,v); return v;}
  set(k,v){ if(this.m.size>=this.n) this.m.delete(this.m.keys().next().value);
    this.m.set(k,v); fs.writeFileSync("cache.json",JSON.stringify([...this.m]));}
}
const c=new LRU(3);
c.set("a",1); c.set("b",2); c.set("c",3);
console.log(c.get("a"));
