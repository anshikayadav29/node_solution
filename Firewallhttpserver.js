const http = require("http");

http.createServer((req, res) => {
  const allowed = ["GET", "POST"];
  if (!allowed.includes(req.method)) {
    res.statusCode = 403;
    return res.end("Blocked");
  }
  res.end("Allowed Method");
}).listen(5000);
