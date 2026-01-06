const http = require("http");

http.createServer((req, res) => {
  res.write("Hello ");
  setTimeout(() => res.write("Node "), 500);
  setTimeout(() => {
    res.write("Stream");
    res.end();
  }, 1000);
}).listen(5000);
