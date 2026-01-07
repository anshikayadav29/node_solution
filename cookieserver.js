// cookie-server.js
const http = require("http");

http.createServer((req, res) => {
  res.setHeader("Set-Cookie", "user=Anshika");
  res.end("Cookie Set");
}).listen(5000);
