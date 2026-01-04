const http = require("http");

http.createServer((req, res) => {
  res.writeHead(302, { Location: "https://google.com" });
  res.end();
}).listen(5000);
