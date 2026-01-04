const http = require("http");

http.createServer((req, res) => {
  res.end("Your IP: " + req.socket.remoteAddress);
}).listen(5000);
