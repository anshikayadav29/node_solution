const http = require("http");

http.createServer((req,res)=>{
  res.end(String(Object.keys(req.headers).length));
}).listen(5000);
