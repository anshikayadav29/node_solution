const http=require("http");
let last=0;

http.createServer((req,res)=>{
  const now=Date.now();
  res.end(now-last<300?"Burst":"Normal");
  last=now;
}).listen(5000);
