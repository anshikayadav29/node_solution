const http = require("http");

http.createServer((req, res) => {
  const start = Date.now();
  while (Date.now() - start < 500) {}
  res.end("CPU Busy");
}).listen(5000);
