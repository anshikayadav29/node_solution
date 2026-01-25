const http=require("http");
let timeout=500;

http.createServer((req,res)=>{
  timeout+=200;
  setTimeout(()=>res.end("Delay "+timeout),timeout);
}).listen(5000);
