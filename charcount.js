const http = require("http");

http.createServer((req, res) => {
  const text = "NodeJS";
  res.end("Characters: " + text.length);
}).listen(5000);
