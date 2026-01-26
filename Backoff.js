const http = require("http");
let delay = 200;

http.createServer((req,res)=>{
  setTimeout(()=>res.end("Delay "+delay), delay);
  delay = Math.min(delay*2, 3000);
}).listen(5000);
