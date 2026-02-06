const http = require("http");

http.createServer((req,res)=>{
  setImmediate(()=>console.log("Immediate"));
  setTimeout(()=>console.log("Timeout"),0);
  process.nextTick(()=>console.log("NextTick"));
  res.end("Check Console");
}).listen(5000);
