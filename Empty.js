const http=require("http");

http.createServer((req,res)=>{
  const u=new Set(req.url).size;
  res.end(u<5?"Low Entropy":"High Entropy");
}).listen(5000);
