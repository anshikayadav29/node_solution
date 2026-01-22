const http = require("http");
let busy = false;

http.createServer((req, res) => {
  if (busy) return res.end("Server Busy");
  busy = true;
  setTimeout(() => {
    busy = false;
    res.end("Processed");
  }, 2000);
}).listen(5000);
