// multipart-server.js
const http = require("http");

http.createServer((req, res) => {
  let data = "";
  req.on("data", c => data += c);
  req.on("end", () => {
    res.end("Multipart received, size: " + data.length);
  });
}).listen(5000);
