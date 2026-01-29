const http = require("http");

http.createServer((req, res) => {
  res.setTimeout(2000, () => res.end("Timeout"));
  setTimeout(() => res.end("Success"), 1000);
}).listen(5000);
