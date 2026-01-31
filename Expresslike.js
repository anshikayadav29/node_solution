class App {
  constructor() { this.routes = {}; }
  get(path, fn) { this.routes[path] = fn; }
  handle(req, res) { this.routes[req.url]?.(req, res); }
}
