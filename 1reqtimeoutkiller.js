const http = require("http");

http.createServer((req,res)=>{
  const timer = setTimeout(()=>res.end("Timeout"),2000);
  req.on("end",()=>{ clearTimeout(timer); res.end("Fast"); });
}).listen(5000);
