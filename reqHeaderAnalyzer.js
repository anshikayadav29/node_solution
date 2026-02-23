const http = require("http");

http.createServer((req,res)=>{
  res.end(JSON.stringify(req.headers,null,2));
}).listen(5000);
