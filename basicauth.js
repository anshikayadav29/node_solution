const http = require("http");

http.createServer((req, res) => {
  const auth = req.headers.authorization;
  res.end(auth ? "Auth Header Found" : "No Auth Header");
}).listen(5000);
