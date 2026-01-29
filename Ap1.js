
const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  const hash = crypto.createHash("sha256").update(req.url).digest("hex");
  res.end(hash);
}).listen(5000);
