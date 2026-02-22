const http = require("http");

http.createServer((req,res)=>{
  if(req.method!=="GET") return res.end("Blocked");
  res.end("Allowed");
}).listen(5000);
