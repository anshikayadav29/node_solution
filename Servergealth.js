const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/health")
    return res.end("OK");
  res.end("Running");
}).listen(5000);
