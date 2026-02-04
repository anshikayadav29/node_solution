const http = require("http");

http.createServer((req, res) => {
  res.setHeader("X-Powered-By", "NodeJS");
  res.end("Header Set");
}).listen(5000);
