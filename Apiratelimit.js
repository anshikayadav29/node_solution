// ip-rate-server.js
const http = require("http");
const map = {};

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  map[ip] = (map[ip] || 0) + 1;

  if (map[ip] > 3) return res.end("Blocked");
  res.end("Allowed");
}).listen(5000);
