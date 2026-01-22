const http = require("http");

http.createServer((req, res) => {
  req.setTimeout(2000, () => {
    res.end("Request Timeout");
  });

  setTimeout(() => res.end("Response"), 3000);
}).listen(5000);
