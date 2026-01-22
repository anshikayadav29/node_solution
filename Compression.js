const http = require("http");
const zlib = require("zlib");

http.createServer((req, res) => {
  res.setHeader("Content-Encoding","gzip");
  zlib.gzip("Compressed Data", (_, d) => res.end(d));
}).listen(5000);
