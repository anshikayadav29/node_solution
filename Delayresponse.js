const http = require("http");

http.createServer((req, res) => {
  setTimeout(() => {
    res.end("Response after 3 seconds");
  }, 3000);
}).listen(5000);
