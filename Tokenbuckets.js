const http = require("http");

class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    setInterval(() => {
      this.tokens = Math.min(capacity, this.tokens + refillRate);
    }, 1000);
  }
  consume() {
    if (this.tokens > 0) { this.tokens--; return true; }
    return false;
  }
}

const bucket = new TokenBucket(5, 1);

http.createServer((req, res) => {
  res.end(bucket.consume() ? "Allowed" : "Blocked");
}).listen(5000);
