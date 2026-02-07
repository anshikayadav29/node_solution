const http=require("http");
let last=Date.now();

http.createServer((req,res)=>{
  const diff=Date.now()-last;
  last=Date.now();
  res.end("Drift "+diff);
}).listen(5000);
