const http = require("http");

http.createServer((req, res) => {
  res.end("Path: " + req.url);
}).listen(5000);

console.log("Path server running on 5000");
