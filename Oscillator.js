const http=require("http");
let h=0;

http.createServer((req,res)=>{
  h=(h+20)%100;
  res.end("Health "+h);
}).listen(5000);
