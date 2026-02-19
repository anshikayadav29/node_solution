const http = require("http");
let readers = 0, writer = false;

http.createServer((req,res)=>{
  if(req.url==="/write"){
    if(readers||writer) return res.end("Write blocked");
    writer=true; setTimeout(()=>writer=false,1000);
    return res.end("Writing");
  }
  readers++; setTimeout(()=>readers--,500);
  res.end("Reading");
}).listen(5000);
