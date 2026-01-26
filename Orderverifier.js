const http = require("http");
let last = 0;

http.createServer((req,res)=>{
  const id = Number(req.headers["x-id"]);
  res.end(id > last ? "OK" : "Out of Order");
  last = id;
}).listen(5000);
