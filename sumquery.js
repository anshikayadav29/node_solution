const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  const sum = (+q.a || 0) + (+q.b || 0);
  res.end("Sum = " + sum);
}).listen(5000);
