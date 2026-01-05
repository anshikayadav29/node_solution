const http = require("http");

http.createServer((req, res) => {
  const text = "nodejs";
  res.end(Buffer.from(text).toString("base64"));
}).listen(5000);
