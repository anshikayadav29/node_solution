const http = require("http");

const s=http.createServer((req,res)=>{
  if(req.url==="/kill"){ res.end("Bye"); return process.exit(); }
  res.end("Alive");
}).listen(5000);
