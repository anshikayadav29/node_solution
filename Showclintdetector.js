const http = require("http");

http.createServer((req, res) => {
  let received = 0;
  req.on("data", c => received += c.length);
  setTimeout(() => res.end("Bytes: " + received), 3000);
}).listen(5000);
