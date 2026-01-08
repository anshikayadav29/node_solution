// health.js
const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/health")
    res.end(JSON.stringify({ status: "OK", uptime: process.uptime() }));
  else res.end("Running");
}).listen(5000);
