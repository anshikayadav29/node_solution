const http = require("http");

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  if (!ip.startsWith("::1")) return res.end("Blocked");
  res.end("Allowed");
}).listen(5000);
