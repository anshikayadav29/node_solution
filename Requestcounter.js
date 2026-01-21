const http = require("http");
const count = {};

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  count[ip] = (count[ip] || 0) + 1;
  res.end("Hits: " + count[ip]);
}).listen(5000);
