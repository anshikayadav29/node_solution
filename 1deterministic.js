const http=require("http");
let seed=1;

http.createServer((req,res)=>{
  seed = (seed * 9301 + 49297) % 233280;
  res.end("Rand "+seed);
}).listen(5000);
