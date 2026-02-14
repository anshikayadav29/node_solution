const http = require("http");

class Container {
  constructor() {
    this.services = new Map();
  }
  register(name, service) {
    this.services.set(name, service);
  }
  resolve(name) {
    return this.services.get(name);
  }
}

const di = new Container();

di.register("db", () => "DB Connected");
di.register("service", () => di.resolve("db")());

http.createServer((req, res) => {
  res.end(di.resolve("service")());
}).listen(5000);
