const http = require("http");

process.env.MODE="DEV";

http.createServer((_,res)=>{
  res.end("Mode: "+process.env.MODE);
}).listen(5000);
