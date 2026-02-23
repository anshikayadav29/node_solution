const http = require("http");

http.createServer((req, res) => {
  http.get("http://example.com", r => r.pipe(res));
}).listen(5000);
