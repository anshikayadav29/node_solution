// distributed-lock.js
class Lock {
  constructor() {
    this.locked = false;
    this.queue = [];
  }

  acquire() {
    return new Promise(res => {
      if (!this.locked) {
        this.locked = true;
        res();
      } else {
        this.queue.push(res);
      }
    });
  }

  release() {
    if (this.queue.length) this.queue.shift()();
    else this.locked = false;
  }
}
