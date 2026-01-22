const http = require("http");

http.createServer((req,res)=>{
  const depth = req.url.split("/").filter(Boolean).length;
  res.end("Depth: " + depth);
}).listen(5000);
