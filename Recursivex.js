const http=require("http");

http.createServer((req,res)=>{
  if(req.url==="/loop")
    http.get("http://localhost:5000",()=>{});
  res.end("Done");
}).listen(5000);
