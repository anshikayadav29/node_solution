const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  const fp = crypto.createHash("md5")
    .update(req.headers["user-agent"] || "")
    .digest("hex");
  res.end(fp);
}).listen(5000);
