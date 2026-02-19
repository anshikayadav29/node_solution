const http = require("http");

http.createServer((_,res)=>{
  const on = new Date().getSeconds()%2===0;
  res.end(on?"Feature ON":"Feature OFF");
}).listen(5000);
