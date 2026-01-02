const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const data = url.parse(req.url, true).query;
  res.end("Name: " + data.name);
}).listen(5000);
