const http = require("http");
let c = 0;

setInterval(()=>c=0,1000);

http.createServer((req,res)=>{
  c++;
  res.end(c > 5 ? "Spike" : "Normal");
}).listen(5000);
