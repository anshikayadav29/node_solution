const http = require("http");

http.createServer((req, res) => {
  const n = Number(req.url.slice(1)) || 5;
  res.end("Square: " + (n * n));
}).listen(5000);
