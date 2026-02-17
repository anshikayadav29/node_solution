const http = require("http");
const log=[];
let value=0;

http.createServer((req,res)=>{
  if(req.url==="/replay"){
    value=0; log.forEach(()=>value++);
  } else log.push(1), value++;
  res.end("Value: "+value);
}).listen(5000);
