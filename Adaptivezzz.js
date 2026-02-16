const http = require("http");
let timeout = 500;

http.createServer((req,res)=>{
  const start = Date.now();
  setTimeout(()=>{
    timeout = (timeout + (Date.now()-start))/2;
    res.end("Adaptive Timeout: "+timeout.toFixed(0));
  }, timeout);
}).listen(5000);
