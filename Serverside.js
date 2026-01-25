const http=require("http");
let timer;

http.createServer((req,res)=>{
  clearTimeout(timer);
  timer=setTimeout(()=>res.end("Processed"),1000);
}).listen(5000);
