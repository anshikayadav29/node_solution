const http = require("http");

http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Header set successfully");
}).listen(5000);
