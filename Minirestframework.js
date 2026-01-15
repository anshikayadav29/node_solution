// mini-framework.js
const http = require("http");

class App {
  constructor() {
    this.routes = {};
  }

  get(path, handler) {
    this.routes[`GET:${path}`] = handler;
  }

  post(path, handler) {
    this.routes[`POST:${path}`] = handler;
  }

  listen(port) {
    http.createServer(async (req, res) => {
      const key = `${req.method}:${req.url}`;
      if (!this.routes[key]) {
        res.writeHead(404);
        return res.end("Not Found");
      }

      let body = "";
      req.on("data", c => body += c);
      req.on("end", () => {
        req.body = body ? JSON.parse(body) : {};
        this.routes[key](req, res);
      });
    }).listen(port, () => console.log(`Server on ${port}`));
  }
}

const app = new App();
app.get("/", (_, res) => res.end("Home"));
app.post("/login", (req, res) => res.end(`Hello ${req.body.name}`));
app.listen(5000);
