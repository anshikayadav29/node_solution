const http = require("http");
const cache = {};

http.createServer((req, res) => {
  cache[req.url] = Date.now();
  res.end("Cached");
}).listen(5000);
