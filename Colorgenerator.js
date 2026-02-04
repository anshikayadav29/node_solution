const http = require("http");

http.createServer((req, res) => {
  const color = "#" + Math.floor(Math.random()*16777215).toString(16);
  res.end(color);
}).listen(5000);
