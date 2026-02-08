const http = require("http");
const cache = new Map();

http.createServer((req, res) => {
  if (cache.has(req.url)) {
    return res.end("Cached: " + cache.get(req.url));
  }
  const value = "Result@" + Date.now();
  cache.set(req.url, value);
  res.end("Fresh: " + value);
}).listen(5000);
