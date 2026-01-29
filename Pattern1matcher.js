const http = require("http");

http.createServer((req, res) => {
  if (/^\/user\/\d+$/.test(req.url))
    res.end("User Route");
  else res.end("Other");
}).listen(5000);
