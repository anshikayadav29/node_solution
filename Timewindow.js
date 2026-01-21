const http = require("http");
let hits = {};

http.createServer((req,res)=>{
  const ip = req.socket.remoteAddress;
  hits[ip] = hits[ip] || [];
  hits[ip] = hits[ip].filter(t => Date.now() - t < 60000);
  if(hits[ip].length >= 5) return res.end("Rate Limited");
  hits[ip].push(Date.now());
  res.end("Allowed");
}).listen(5000);
