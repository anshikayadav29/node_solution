const http=require("http");

http.createServer((req,res)=>{
  res.end("PID "+process.pid);
}).listen(5000);
