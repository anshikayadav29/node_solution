const http = require("http");
let load = 0;

http.createServer((_,res)=>{
  load++;
  setTimeout(()=>load--,500);
  if(load>3) return res.end("Dropped");
  res.end("Handled");
}).listen(5000);
