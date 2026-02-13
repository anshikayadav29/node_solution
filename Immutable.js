const http = require("http");

class Config {
  constructor(port){
    this.port = port;
    Object.freeze(this);
  }
}

const config = new Config(5000);

http.createServer((r,res)=>res.end("Port "+config.port))
.listen(config.port);
