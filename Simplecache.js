const http = require("http");
const cache = {};

http.createServer((req, res) => {
  if (!cache[req.url]) {
    cache[req.url] = "Cached at " + new Date();
  }
  res.end(cache[req.url]);
}).listen(5000);
