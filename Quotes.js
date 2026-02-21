const http = require("http");
const quotes = ["Learn", "Build", "Repeat"];

http.createServer((_, res) => {
  res.end(quotes[Math.floor(Math.random() * quotes.length)]);
}).listen(5000);
