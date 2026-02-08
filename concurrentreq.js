const http = require("http");
let active = 0;

http.createServer((req, res) => {
  if (active >= 2) return res.end("Busy");
  active++;
  setTimeout(() => {
    active--;
    res.end("Done");
  }, 2000);
}).listen(5000);
