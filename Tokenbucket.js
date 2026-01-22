// token-bucket.js
class Bucket {
  constructor(cap) {
    this.cap = cap;
    this.tokens = cap;
    setInterval(()=>this.tokens=this.cap,1000);
  }
  take() {
    if (this.tokens>0) return this.tokens--, true;
    return false;
  }
}
