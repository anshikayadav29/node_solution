const http = require("http");

class Store {
  constructor() {
    this.events = [];
    this.state = 0;
  }

  dispatch(event) {
    this.events.push(event);
    this.state += event;
  }

  snapshot() {
    return { state: this.state, events: this.events.length };
  }
}

const store = new Store();

http.createServer((req, res) => {
  store.dispatch(1);
  res.end(JSON.stringify(store.snapshot()));
}).listen(5000);
