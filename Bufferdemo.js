const http = require("http");

http.createServer((req, res) => {
  const buf = Buffer.from("Node Buffer");
  res.end(buf);
}).listen(5000);
