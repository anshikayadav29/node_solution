const http = require("http");

const limits = {};

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  const now = Date.now();

  if (!limits[ip]) limits[ip] = [];
  limits[ip] = limits[ip].filter(t => now - t < 60000);

  if (limits[ip].length >= 5) {
    res.statusCode = 429;
    return res.end("Too Many Requests");
  }

  limits[ip].push(now);
  res.end("Request Allowed");
}).listen(5000, () => console.log("Rate limiter on 5000"));
