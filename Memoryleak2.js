const http = require("http");
const leak=[];

http.createServer((req,res)=>{
  leak.push(new Array(100000).fill("*"));
  res.end("Leaking");
}).listen(5000);
