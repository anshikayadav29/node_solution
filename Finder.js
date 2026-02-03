const http = require("http");

http.createServer((req, res) => {
  res.end("IP: " + req.socket.remoteAddress);
}).listen(5000);
