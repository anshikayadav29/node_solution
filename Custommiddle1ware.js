class App {
  constructor() {
    this.middlewares = [];
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  run(req) {
    let i = 0;
    const next = () => this.middlewares[i++]?.(req, next);
    next();
  }
}

const app = new App();
app.use((req, next) => { console.log("M1"); next(); });
app.use((req, next) => { console.log("M2"); });

app.run({});
