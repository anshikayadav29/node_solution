const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/login") res.end("Login Success");
  else res.end("Invalid");
}).listen(5000);
