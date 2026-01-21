const http = require("http");

http.createServer((req, res) => {
  if (req.headers["x-api-key"] !== "123")
    return res.end("Invalid Key");
  res.end("Authorized");
}).listen(5000);
