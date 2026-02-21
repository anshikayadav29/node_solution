const http = require("http");

http.createServer((_, res) => {
  res.end(`<h1>Time</h1><p>${new Date()}</p>`);
}).listen(5000);
