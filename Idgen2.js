const http = require("http");
let id = 1;

http.createServer((req, res) => {
  id = (id * 31) % 100000;
  res.end("ID " + id);
}).listen(5000);
