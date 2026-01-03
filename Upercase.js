const http = require("http");

http.createServer((req, res) => {
  res.end("node js server".toUpperCase());
}).listen(5000);
