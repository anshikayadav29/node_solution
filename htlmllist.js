const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<ul><li>Node</li><li>JS</li><li>Server</li></ul>");
}).listen(5000);
