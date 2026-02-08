const http = require("http");
const map = new Map();

http.createServer((req, res) => {
  const now = Date.now();
  const arr = map.get(req.socket.remoteAddress) || [];
  const recent = arr.filter(t => now - t < 10000);
  if (recent.length >= 3) return res.end("Blocked");
  recent.push(now);
  map.set(req.socket.remoteAddress, recent);
  res.end("Allowed");
}).listen(5000);
