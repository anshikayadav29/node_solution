// http2-server.js
const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
});

server.on("stream", (stream) => {
  stream.respond({ ":status": 200 });
  stream.end("Hello HTTP/2");
});

server.listen(5000);
