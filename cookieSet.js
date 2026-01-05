const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {
    "Set-Cookie": "user=guest"
  });
  res.end("Cookie Set");
}).listen(5000);
