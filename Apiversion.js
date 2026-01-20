// versioned-api.js
const http = require("http");

http.createServer((req, res) => {
  if (req.url.startsWith("/v1")) res.end("API v1");
  else if (req.url.startsWith("/v2")) res.end("API v2");
  else res.end("Unknown version");
}).listen(5000);
