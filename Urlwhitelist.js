const http = require("http");
const allow=["/a","/b"];

http.createServer((req,res)=>{
  res.end(allow.includes(req.url)?"Allowed":"Denied");
}).listen(5000);
