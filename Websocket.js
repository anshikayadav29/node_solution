// websocket-server.js
const http = require("http");
const crypto = require("crypto");

http.createServer((req, res) => {
  if (req.headers.upgrade !== "websocket") {
    res.end("Not WebSocket");
    return;
  }

  const key = req.headers["sec-websocket-key"];
  const accept = crypto
    .createHash("sha1")
    .update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
    .digest("base64");

  res.writeHead(101, {
    Upgrade: "websocket",
    Connection: "Upgrade",
    "Sec-WebSocket-Accept": accept
  });
  res.socket.write("Welcome WebSocket");
}).listen(5000);
