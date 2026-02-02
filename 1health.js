const http = require("http");

http.createServer((req, res) => {
  res.end(JSON.stringify({
    uptime: process.uptime(),
    memory: process.memoryUsage()
  }));
}).listen(5000);
