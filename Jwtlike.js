const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  if (req.url === "/token") {
    const token = crypto.randomBytes(16).toString("hex");
    res.end(token);
  } else {
    res.end("Get /token");
  }
}).listen(5000);
