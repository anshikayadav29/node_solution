const http = require("http");
const crypto = require("crypto");

http.createServer((req,res)=>{
  const fp = crypto.createHash("sha1")
    .update(req.socket.remoteAddress + req.headers["user-agent"])
    .digest("hex");
  res.end(fp);
}).listen(5000);
