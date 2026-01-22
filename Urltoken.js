const http=require("http");

http.createServer((req,res)=>{
  res.end(req.url.split("/").pop());
}).listen(5000);
