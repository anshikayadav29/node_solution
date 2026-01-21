const http = require("http");
let session=0;

http.createServer((req,res)=>{
  res.end("Session "+(++session));
}).listen(5000);
