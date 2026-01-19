const http = require("http");

http.createServer((req, res) => {
  const match = req.url.match(/^\/user\/(\d+)/);
  if (match) res.end("User ID: " + match[1]);
  else res.end("No user");
}).listen(5000);
