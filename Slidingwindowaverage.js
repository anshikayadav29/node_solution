// sliding-avg.js
class SlidingAvg {
  constructor(n) {
    this.n = n;
    this.arr = [];
  }
  add(v) {
    this.arr.push(v);
    if (this.arr.length > this.n) this.arr.shift();
    return this.arr.reduce((a,b)=>a+b,0)/this.arr.length;
  }
}
