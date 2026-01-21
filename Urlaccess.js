const http = require("http");
const times = {};

http.createServer((req, res) => {
  times[req.url] = Date.now();
  res.end("Tracked");
}).listen(5000);
