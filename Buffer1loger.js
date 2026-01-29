const http = require("http");
let buffer = [];

http.createServer((req, res) => {
  buffer.push(req.url);
  if (buffer.length > 5) buffer.shift();
  res.end(JSON.stringify(buffer));
}).listen(5000);
