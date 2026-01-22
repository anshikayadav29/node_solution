const http=require("http");

http.createServer((req,res)=>{
  res.end(/^\d+$/.test(req.url.slice(1))?"Number":"Text");
}).listen(5000);
