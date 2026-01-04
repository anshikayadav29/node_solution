const http = require("http");

http.createServer((req, res) => {
  let count = "";
  for (let i = 5; i >= 1; i--) count += i + " ";
  res.end(count);
}).listen(5000);
