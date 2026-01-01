const http = require("http");

http.createServer((req, res) => {
  res.end("Node.js Server is Working");
}).listen(5008);

console.log("Server running on 5008");
