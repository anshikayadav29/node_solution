// logger-server.js
const http = require("http");

http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.end("Logged");
}).listen(5000);
