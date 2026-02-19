const http = require("http");
let data = 0, snapshot = 0;

http.createServer((req,res)=>{
  if(req.url==="/snapshot") snapshot = data;
  else data++;
  res.end("Snapshot: "+snapshot+" | Live: "+data);
}).listen(5000);
