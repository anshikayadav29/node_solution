const http = require("http");
let lock = false;

http.createServer((req,res)=>{
  if(lock) return res.end("Deadlock");
  lock = true;
  setTimeout(()=> lock=false, 3000);
  res.end("Lock Acquired");
}).listen(5000);
