const http = require("http");
const cache = new Set();

http.createServer((req, res) => {
  if (cache.has(req.url)) {
    return res.end("Duplicate Request");
  }
  cache.add(req.url);
  setTimeout(() => cache.delete(req.url), 5000);
  res.end("Processed");
}).listen(5000);
