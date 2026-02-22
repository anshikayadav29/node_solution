const http = require("http");

http.createServer((req,res)=>{
  const ct = req.headers["content-type"] || "";
  const boundary = ct.split("boundary=")[1] || "None";
  res.end("Boundary: " + boundary);
}).listen(5000);
