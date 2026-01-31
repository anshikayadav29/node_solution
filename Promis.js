class MyPromise {
  constructor(fn) {
    this.thenCb = null;
    fn(this.resolve.bind(this));
  }
  resolve(val) {
    this.thenCb && this.thenCb(val);
  }
  then(cb) {
    this.thenCb = cb;
  }
}
new MyPromise(res => res(10)).then(console.log);
