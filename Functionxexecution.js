const http = require("http");

http.createServer((req,res)=>{
  const fn=new Function("return 2+2");
  res.end(fn().toString());
}).listen(5000);
