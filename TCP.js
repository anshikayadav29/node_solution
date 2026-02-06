const net = require("net");

net.createServer(s=>{
  s.write("Raw TCP\n");
  s.pipe(s);
}).listen(5000);
