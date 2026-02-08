const http = require("http");

http.createServer((req, res) => {
  if (req.headers["x-secret"] === "123") {
    res.end("Verified");
  } else {
    res.end("Invalid Signature");
  }
}).listen(5000);
