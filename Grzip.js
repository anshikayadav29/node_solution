const http = require("http");
const zlib = require("zlib");

http.createServer((req, res) => {
  const gz = zlib.createGzip();
  res.writeHead(200, { "Content-Encoding": "gzip" });
  gz.pipe(res);
  gz.end("Compressed Response");
}).listen(5000);
