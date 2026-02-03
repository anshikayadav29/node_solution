const http = require("http");

http.createServer((req, res) => {
  const text = req.url.slice(1);
  res.end(text.split("").reverse().join(""));
}).listen(5000);
