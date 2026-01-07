const http = require("http");

http.createServer((req, res) => {
  res.statusCode = 404;
  res.end("Page Not Found");
}).listen(5000);

console.log("Status code server running on 5000");
