// heap.js
class Heap {
  constructor(){this.h=[]}
  push(v){this.h.push(v);this.h.sort((a,b)=>a-b)}
  pop(){return this.h.shift()}
}
