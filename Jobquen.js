// job-queue.js
class JobQueue {
  constructor() {
    this.q = [];
    this.running = false;
  }

  add(job, retry = 3, delay = 0) {
    this.q.push({ job, retry, delay });
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;

    while (this.q.length) {
      const j = this.q.shift();
      try {
        await new Promise(r => setTimeout(r, j.delay));
        await j.job();
      } catch {
        if (j.retry > 0) {
          j.retry--;
          this.q.push(j);
        }
      }
    }
    this.running = false;
  }
}

// demo
const q = new JobQueue();
q.add(async () => { throw "fail"; }, 2, 500);
q.add(async () => console.log("Done"));
