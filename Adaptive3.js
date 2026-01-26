const http = require("http");
let timeout = 300;

http.createServer((req,res)=>{
  setTimeout(()=>res.end("Timeout "+timeout), timeout);
  timeout += 200;
}).listen(5000);
