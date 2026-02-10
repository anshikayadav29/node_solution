const http = require("http");
const crypto = require("crypto");

const body = "Hello ETag";
const etag = crypto.createHash("md5").update(body).digest("hex");

http.createServer((req, res) => {
  if (req.headers["if-none-match"] === etag) {
    res.writeHead(304); return res.end();
  }
  res.setHeader("ETag", etag);
  res.end(body);
}).listen(5000);
