class Queue {
  constructor(n){ this.n=n; this.run=0; this.q=[]; }
  push(task){
    this.q.push(task); this.next();
  }
  next(){
    if(this.run>=this.n||!this.q.length) return;
    this.run++;
    this.q.shift()(()=>{ this.run--; this.next(); });
  }
}
const q=new Queue(2);
for(let i=0;i<5;i++)
  q.push(done=>setTimeout(()=>{console.log(i);done()},500));
