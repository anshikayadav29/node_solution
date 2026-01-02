const http = require("http");

http.createServer((req, res) => {
  const num = 7;
  res.end(num % 2 === 0 ? "Even" : "Odd");
}).listen(5000);
