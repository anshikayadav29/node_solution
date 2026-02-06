const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{
  fs.createReadStream("big.txt").pipe(res);
}).listen(5000);
