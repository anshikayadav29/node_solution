const http = require("http");
let tries = 0;

http.createServer((_,res)=>{
  tries++;
  if(tries<3) return res.end("Retrying...");
  tries=0;
  res.end("Success");
}).listen(5000);
