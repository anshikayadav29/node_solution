// cache-server.js
const http = require("http");
let cache = null;

http.createServer((req, res) => {
  if (cache) return res.end(cache);
  cache = "Cached at " + new Date();
  res.end(cache);
}).listen(5000);
