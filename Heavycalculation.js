const http = require("http");

http.createServer((req, res) => {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  res.end("Sum: " + sum);
}).listen(5000);
