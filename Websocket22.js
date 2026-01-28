const net = require('net');

net.createServer(socket => {
  socket.on('data', data => {
    console.log("Client:", data.toString());
    socket.write("Pong");
  });
}).listen(8080);
