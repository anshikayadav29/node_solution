const http=require("http");
let hits=[];

http.createServer((req,res)=>{
  const now=Date.now();
  hits=hits.filter(t=>now-t<5000);
  hits.push(now);
  res.end(hits.length>5?"Blocked":"Allowed");
}).listen(5000);
