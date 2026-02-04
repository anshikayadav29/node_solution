
const http = require("http");

http.createServer((req, res) => {
  res.end(":-)  <NODE>");
}).listen(5000);
