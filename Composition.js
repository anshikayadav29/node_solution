const http = require("http");

class Formatter {
  format(msg){ return msg.toUpperCase(); }
}

class Server {
  constructor(formatter){ this.formatter = formatter; }
  start(){
    http.createServer((r,res)=>{
      res.end(this.formatter.format("composed"));
    }).listen(5000);
  }
}

new Server(new Formatter()).start();
