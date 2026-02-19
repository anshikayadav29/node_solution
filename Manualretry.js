const http = require("http");
let attempt = 0;

http.createServer((_,res)=>{
  attempt++;
  const wait = Math.pow(2, attempt) * 100;
  setTimeout(()=>res.end("Attempt "+attempt), wait);
}).listen(5000);
