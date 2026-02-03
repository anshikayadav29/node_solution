const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  res.end(JSON.stringify(q));
}).listen(5000);
