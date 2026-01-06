const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h2>Static HTML from Node</h2>");
}).listen(5000);
