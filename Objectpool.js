const http = require("http");

class Pool {
  constructor(size){
    this.pool = Array(size).fill({});
  }
  acquire(){ return this.pool.pop(); }
  release(obj){ this.pool.push(obj); }
}

const pool = new Pool(5);

http.createServer((req,res)=>{
  const obj = pool.acquire();
  pool.release(obj);
  res.end("Pool Used");
}).listen(5000);
