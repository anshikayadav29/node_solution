const http = require("http");

http.createServer((req,res)=>{
  res.end(req.url.includes("#")?"Has Hash":"No Hash");
}).listen(5000);
