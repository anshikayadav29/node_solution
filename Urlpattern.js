const http=require("http");

http.createServer((req,res)=>{
  res.end(/^[a-z]+$/.test(req.url.slice(1))?"Alpha":"Mixed");
}).listen(5000);
