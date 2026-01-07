const http = require("http");

http.createServer((req, res) => {
  res.end(new Date().toDateString());
}).listen(5000);

console.log("Date server running on 5000");
