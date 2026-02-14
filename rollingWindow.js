const http = require("http");

const hits=[];
setInterval(()=>hits.shift(),1000);

http.createServer((req,res)=>{
  hits.push(Date.now());
  res.end("Hits last sec:"+hits.length);
}).listen(5000);
