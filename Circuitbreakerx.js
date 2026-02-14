const http = require("http");

class CircuitBreaker {
  constructor(limit) {
    this.failures = 0;
    this.limit = limit;
  }

  call(fn) {
    if (this.failures >= this.limit)
      throw "Circuit Open";

    try {
      return fn();
    } catch {
      this.failures++;
      throw "Failure";
    }
  }
}

const breaker = new CircuitBreaker(3);

http.createServer((req, res) => {
  try {
    breaker.call(() => { throw "err"; });
  } catch (e) {
    res.end(e);
  }
}).listen(5000);
