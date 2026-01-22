const http = require("http");

http.createServer((req,res)=>{
  let size=0;
  req.on("data",c=>{
    size+=c.length;
    if(size>1024) req.destroy();
  });
  req.on("end",()=>res.end("OK"));
}).listen(5000);
