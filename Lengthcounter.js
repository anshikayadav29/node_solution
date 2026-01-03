const http = require("http");

http.createServer((req, res) => {
  const text = "NodeJS";
  res.end("Length: " + text.length);
}).listen(5000);
