const http = require("http");

http.createServer((req, res) => {
  let n = 7, prime = true;
  for (let i = 2; i < n; i++) if (n % i === 0) prime = false;
  res.end(prime ? "Prime" : "Not Prime");
}).listen(5000);
