const http = require("http");
let id = 0;

http.createServer((_,res)=>{
  id = (id + 1) % 10000;
  res.end("ID: "+id);
}).listen(5000);
