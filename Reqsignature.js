const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  const sig = req.headers["x-sign"];
  const valid = crypto.createHash("sha1").update(req.url).digest("hex");
  res.end(sig === valid ? "Verified" : "Rejected");
}).listen(5000);
