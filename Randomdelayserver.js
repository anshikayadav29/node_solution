const http = require("http");

http.createServer((req,res)=>{
  setTimeout(()=>res.end("Done"),Math.random()*3000);
}).listen(5000);
