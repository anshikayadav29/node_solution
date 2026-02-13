const http = require("http");

class Logger {
  log(msg) {}
}

class ConsoleLogger extends Logger {
  log(msg) { console.log("LOG:", msg); }
}

class Server {
  constructor(logger) { this.logger = logger; }
  start() {
    http.createServer((r, res) => {
      this.logger.log(r.url);
      res.end("Logged");
    }).listen(5000);
  }
}

new Server(new ConsoleLogger()).start();
