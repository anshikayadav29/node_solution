const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
});

server.on("stream", (stream, headers) => {
  stream.respond({ ":status": 200 });
  stream.end("Hello from HTTP/2 Server");
});

server.listen(5000, () => {
  console.log("HTTP/2 server running on 5000");
});
