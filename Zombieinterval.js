const http=require("http");

http.createServer((r,s)=>{
  setInterval(()=>{},1000);
  s.end("Zombie");
}).listen(5000);
