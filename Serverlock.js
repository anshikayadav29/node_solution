const http = require("http");
let locked = false;

http.createServer((req, res) => {
  if (locked) return res.end("Resource Busy");
  locked = true;
  setTimeout(() => locked = false, 3000);
  res.end("Lock Acquired");
}).listen(5000);
