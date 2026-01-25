const http=require("http");

http.createServer((req,res)=>{
  res.end("X".repeat(req.url.length));
}).listen(5000);
