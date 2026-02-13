const http = require("http");

class Counter {
  #count = 0;
  next() { return ++this.#count; }
}

const counter = new Counter();

http.createServer((r, res) => {
  res.end(counter.next().toString());
}).listen(5000);
