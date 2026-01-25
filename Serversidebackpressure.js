const http=require("http");
let inflight=0;

http.createServer((req,res)=>{
  if(inflight>3) return res.end("Backpressure");
  inflight++;
  setTimeout(()=>{ inflight--; res.end("Done"); },1000);
}).listen(5000);
