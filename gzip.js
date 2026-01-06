const http = require("http");

http.createServer((req, res) => {
  const enc = req.headers["accept-encoding"] || "";
  res.end(enc.includes("gzip") ? "Gzip Supported" : "No Gzip");
}).listen(5000);
