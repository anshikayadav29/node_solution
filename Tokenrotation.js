const http=require("http");

http.createServer((req,res)=>{
  res.end("Token-"+Math.floor(Date.now()/5000));
}).listen(5000);
