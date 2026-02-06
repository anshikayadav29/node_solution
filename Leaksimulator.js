const http = require("http");
let leak=[];

http.createServer((req,res)=>{
  leak.push(new Array(1e5).fill("x"));
  res.end("Leaking");
}).listen(5000);
