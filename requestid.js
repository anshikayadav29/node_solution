// request-id.js
const http = require("http");
let id = 0;

http.createServer((req, res) => {
  res.end("Request ID: " + (++id));
}).listen(5000);
