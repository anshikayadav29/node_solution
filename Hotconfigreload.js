const http = require("http");
let config = {mode:"A"};

http.createServer((req,res)=>{
  if(req.url==="/reload") config.mode="B";
  res.end("Mode: "+config.mode);
}).listen(5000);
