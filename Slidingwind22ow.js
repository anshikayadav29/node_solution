const http = require("http");
const hits = [];

http.createServer((_,res)=>{
  const now = Date.now();
  hits.push(now);
  while(hits[0] < now-5000) hits.shift();
  res.end("Hits(5s): "+hits.length);
}).listen(5000);
