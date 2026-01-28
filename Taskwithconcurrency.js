class Queue {
  constructor(limit) {
    this.running = 0;
    this.limit = limit;
    this.queue = [];
  }

  add(task) {
    this.queue.push(task);
    this.run();
  }

  run() {
    if (this.running >= this.limit || !this.queue.length) return;
    this.running++;
    const task = this.queue.shift();
    task(() => {
      this.running--;
      this.run();
    });
  }
}

const q = new Queue(2);
for (let i = 1; i <= 5; i++)
  q.add(done => setTimeout(() => { console.log(i); done(); }, 1000));
