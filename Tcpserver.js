// tcp-echo.js
const net = require("net");

net.createServer(sock => {
  sock.on("data", d => sock.write(d));
}).listen(5000);
