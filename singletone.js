const http = require("http");

class AppServer {
  static instance;
  constructor() {
    if (AppServer.instance) return AppServer.instance;
    AppServer.instance = this;
  }
  start() {
    http.createServer((req,res)=>res.end("Singleton"))
      .listen(5000);
  }
}
new AppServer().start();
