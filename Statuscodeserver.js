const http = require("http");

http.createServer((req, res) => {
  res.statusCode = req.url === "/fail" ? 500 : 200;
  res.end("Status Sent");
}).listen(5000);
