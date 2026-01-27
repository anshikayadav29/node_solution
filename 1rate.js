const http = require("http");

const requests = {};
const LIMIT = 5;

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  requests[ip] = (requests[ip] || 0) + 1;

  if (requests[ip] > LIMIT) {
    res.writeHead(429);
    return res.end("Too Many Requests");
  }

  res.end("Request Allowed");
}).listen(5000);
