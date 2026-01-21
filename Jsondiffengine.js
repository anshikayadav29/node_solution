const http = require("http");

http.createServer((req,res)=>{
  let b=""; req.on("data",c=>b+=c);
  req.on("end",()=>{
    const {a,b2}=JSON.parse(b);
    res.end(JSON.stringify(a!==b2));
  });
}).listen(5000);
