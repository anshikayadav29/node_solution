const http = require("http");

http.createServer((req, res) => {
  res.writeHead(201);
  res.end("Created Successfully");
}).listen(5000);
