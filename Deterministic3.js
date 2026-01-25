const http=require("http");
let n=1;

http.createServer((req,res)=>{
  n = (n*7)%97;
  res.end("Load "+n);
}).listen(5000);
