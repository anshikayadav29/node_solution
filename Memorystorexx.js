
class Store{
  constructor(){this.v=0;this.snap=[];}
  set(){this.snap.push(this.v++);}
  rollback(){this.v=this.snap.pop()||0;}
}
const s=new Store();
s.set();s.set();s.rollback();
console.log(s.v);
