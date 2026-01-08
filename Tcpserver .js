// tcp-server.js
const net = require("net");

net.createServer(socket => {
  socket.write("Hello from TCP Server");
  socket.end();
}).listen(5000);
