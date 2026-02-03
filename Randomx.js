const http = require("http");
const quotes = ["Learn", "Build", "Grow", "Repeat"];

http.createServer((req, res) => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  res.end(q);
}).listen(5000);
