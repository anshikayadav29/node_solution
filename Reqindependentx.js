const http = require("http");
const done = new Set();

http.createServer((req, res) => {
  if (done.has(req.url)) return res.end("Duplicate");
  done.add(req.url);
  res.end("Processed");
}).listen(5000);
