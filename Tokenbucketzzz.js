const http = require("http");
let tokens = 5;

setInterval(()=>tokens=5,1000);

http.createServer((_,res)=>{
  if(tokens--<=0) return res.end("No Tokens");
  res.end("Served");
}).listen(5000);
