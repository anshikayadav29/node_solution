const http = require("http");

http.createServer((req, res) => {
  const delay = Math.min(req.url.length * 200, 3000);
  setTimeout(() => res.end("Delayed " + delay), delay);
}).listen(5000);
