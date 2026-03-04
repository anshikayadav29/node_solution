class MyPromise {
  constructor(fn){
    this.cb=[];
    fn(v=>this.cb.forEach(f=>f(v)));
  }
  then(f){ this.cb.push(f); return this; }
}
new MyPromise(res=>setTimeout(()=>res(10),500))
  .then(v=>console.log(v));
