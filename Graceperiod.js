const http = require("http");

http.createServer((req, res) => {
  res.write("Processing...");
  setTimeout(() => res.end("Finished"), 2000);
}).listen(5000);
