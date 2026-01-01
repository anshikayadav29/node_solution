const http = require("http");

http.createServer((req, res) => {
  res.end(new Date().toString());
}).listen(5005);

console.log("Server running on 5005");
