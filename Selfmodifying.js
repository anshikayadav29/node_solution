const http = require("http");
let fn = () => "Version 1";

http.createServer((req,res)=>{
  if(req.url==="/upgrade") fn = () => "Version 2";
  res.end(fn());
}).listen(5000);
