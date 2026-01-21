const http = require("http");

http.createServer((req, res) => {
  res.end(JSON.stringify(process.memoryUsage()));
}).listen(5000);
