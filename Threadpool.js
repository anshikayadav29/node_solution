// thread-pool-sim.js
class ThreadPool {
  constructor(size) {
    this.size = size;
    this.active = 0;
    this.queue = [];
  }

  run(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    if (this.active >= this.size || this.queue.length === 0) return;
    const task = this.queue.shift();
    this.active++;
    Promise.resolve(task()).finally(() => {
      this.active--;
      this.next();
    });
  }
}
