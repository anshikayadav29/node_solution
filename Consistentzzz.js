const http = require("http");
let clock = 0;

http.createServer((req,res)=>{
  clock = Math.max(clock, Number(req.headers["x-clock"] || 0)) + 1;
  res.setHeader("X-Clock", clock);
  res.end("Clock: " + clock);
}).listen(5000);
