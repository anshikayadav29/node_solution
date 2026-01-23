const http = require("http");
let tokens = 5;

setInterval(()=> tokens = Math.min(tokens+1,5),1000);

http.createServer((req,res)=>{
  if(tokens<=0) return res.end("Rate Limited");
  tokens--;
  res.end("Allowed");
}).listen(5000);
