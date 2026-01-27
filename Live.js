const http = require("http");

http.createServer((req, res) => {
  const mem = process.memoryUsage();
  res.end(JSON.stringify(mem, null, 2));
}).listen(5000);
