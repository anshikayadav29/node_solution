const http=require("http");
let cooldown=false;

http.createServer((req,res)=>{
  if(cooldown) return res.end("Cooldown");
  cooldown=true;
  setTimeout(()=>cooldown=false,2000);
  res.end("Accepted");
}).listen(5000);
