const http = require("http");

http.createServer((req, res) => {
  res.end("Uptime: " + process.uptime());
}).listen(5000);
