const http = require("http");

class Handler {
  handle(req, res) {
    throw new Error("Not implemented");
  }
}

class HomeHandler extends Handler {
  handle(req, res) {
    res.end("HOME");
  }
}

class Router {
  constructor() {
    this.routes = { "/": new HomeHandler() };
  }
  route(req, res) {
    (this.routes[req.url] || this.routes["/"]).handle(req, res);
  }
}

const router = new Router();
http.createServer((req, res) => router.route(req, res)).listen(5000);
