const http = require("http");

http.createServer((req, res) => {
  res.end("Timestamp: " + Date.now());
}).listen(5000);
