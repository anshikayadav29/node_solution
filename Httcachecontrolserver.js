const http = require("http");

http.createServer((req, res) => {
  res.setHeader("Cache-Control", "max-age=60");
  res.end("Cached for 60 seconds");
}).listen(5000);
