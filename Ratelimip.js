const http = require('http');
const requests = {};

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  const now = Date.now();

  if (!requests[ip]) requests[ip] = [];
  requests[ip] = requests[ip].filter(t => now - t < 60000);

  if (requests[ip].length >= 5) {
    res.writeHead(429);
    return res.end("Too Many Requests");
  }

  requests[ip].push(now);
  res.end("Request Allowed");
}).listen(3000);
