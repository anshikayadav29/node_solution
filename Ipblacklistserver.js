const http = require("http");
const blocked = ["::1"];

http.createServer((req, res) => {
  if (blocked.includes(req.socket.remoteAddress))
    return res.end("IP Blocked");
  res.end("Access Granted");
}).listen(5000);
