const http = require("http");

http.createServer((req, res) => {
  res.end("Random Number: " + Math.floor(Math.random() * 100));
}).listen(5000);
