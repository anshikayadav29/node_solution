const http = require("http");
let arr=[];

setInterval(()=>console.log("Mem:",process.memoryUsage().heapUsed),2000);

http.createServer((_,res)=>{
  arr.push(Buffer.alloc(1e6));
  res.end("Allocated");
}).listen(5000);
