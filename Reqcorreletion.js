const http = require("http");

http.createServer((req, res) => {
  const id = Math.random().toString(36).slice(2);
  res.setHeader("X-Request-ID", id);
  res.end("ID: " + id);
}).listen(5000);
