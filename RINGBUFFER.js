const http = require("http");
const size = 5;
const buffer = Array(size);
let i = 0;

http.createServer((req,res)=>{
  buffer[i++ % size] = Date.now();
  res.end(JSON.stringify(buffer));
}).listen(5000);
