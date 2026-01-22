const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") res.end("Home Page");
  else if (req.url === "/about") res.end("About Page");
  else res.end("404");
}).listen(5000);
