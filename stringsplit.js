const http = require("http");

http.createServer((req, res) => {
  res.end("Node JS Server".split(" ").join(" | "));
}).listen(5000);
