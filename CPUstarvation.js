const http = require("http");

http.createServer((req,res)=>{
  const start=Date.now();
  while(Date.now()-start<2000){}
  res.end("Blocked");
}).listen(5000);
