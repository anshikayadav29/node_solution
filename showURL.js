const http = require("http");

http.createServer((req, res) => {
  res.end("URL is: " + req.url);
}).listen(5001);

console.log("Server running on 5001");
