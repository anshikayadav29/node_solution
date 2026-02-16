const http = require("http");
const window = [];

http.createServer((req, res) => {
  const now = Date.now();
  while (window.length && window[0] < now - 1000) window.shift();

  if (window.length >= 5) return res.end("Blocked");
  window.push(now);
  res.end("Allowed");
}).listen(5000);
