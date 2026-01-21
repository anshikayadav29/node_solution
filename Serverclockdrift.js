const http = require("http");

http.createServer((req,res)=>{
  res.end(new Date(Date.now()+5000).toISOString());
}).listen(5000);
