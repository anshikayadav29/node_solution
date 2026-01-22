// async-queue.js
class Queue {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.q = [];
  }
  add(task) {
    this.q.push(task);
    this.run();
  }
  run() {
    if (this.running >= this.limit || !this.q.length) return;
    this.running++;
    const t = this.q.shift();
    t().finally(() => {
      this.running--;
      this.run();
    });
  }
}
