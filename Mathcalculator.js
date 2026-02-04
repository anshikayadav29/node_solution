const http = require("http");

http.createServer((req, res) => {
  const [a, b] = [5, 10];
  res.end("Sum: " + (a + b));
}).listen(5000);
