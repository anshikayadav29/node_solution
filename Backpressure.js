const http = require("http");
let busy = false;

http.createServer((req, res) => {
  if (busy) return res.end("Server Busy");
  busy = true;
  setTimeout(() => busy = false, 1000);
  res.end("Accepted");
}).listen(5000);
