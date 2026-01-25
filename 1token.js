const http = require("http");

http.createServer((req,res)=>{
  const t = Number(req.headers["x-time"]);
  res.end(Date.now()-t < 5000 ? "Valid" : "Expired");
}).listen(5000);
