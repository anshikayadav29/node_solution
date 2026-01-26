const http = require("http");

http.createServer((req,res)=>{
  const unique = new Set(req.url).size;
  res.end(unique < 4 ? "Bot" : "Human");
}).listen(5000);
