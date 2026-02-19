const http = require("http");

http.createServer((req,res)=>{
  const allow = req.url.includes("admin");
  res.end(allow ? "Access Granted" : "Denied");
}).listen(5000);
