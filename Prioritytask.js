// priority-queue.js
class PQ {
  constructor(){this.a=[]}
  push(p,v){this.a.push([p,v]);this.a.sort((x,y)=>y[0]-x[0])}
  pop(){return this.a.shift()?.[1]}
}
