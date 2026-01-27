const http = require("http");
const KEY = "12345";

http.createServer((req, res) => {
  if (req.headers["x-api-key"] !== KEY) {
    res.writeHead(401);
    return res.end("Unauthorized");
  }
  res.end("Welcome");
}).listen(5000);
