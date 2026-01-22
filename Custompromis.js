// my-promise.js
class MyPromise {
  constructor(fn) {
    this.cb = null;
    fn(val => this.cb && this.cb(val));
  }
  then(cb) {
    this.cb = cb;
  }
}
new MyPromise(res => setTimeout(() => res("Done"), 1000))
  .then(console.log);
