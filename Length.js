const http = require("http");

http.createServer((req, res) => {
  const pwd = req.url.slice(1);
  res.end(pwd.length >= 6 ? "Strong" : "Weak");
}).listen(5000);
