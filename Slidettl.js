const http = require("http");
const cache = {};

http.createServer((req,res)=>{
  const now = Date.now();
  if(cache[req.url] && now-cache[req.url]<3000)
    return res.end("Cached");
  cache[req.url]=now;
  res.end("Fresh");
}).listen(5000);
