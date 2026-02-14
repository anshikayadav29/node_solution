const http = require("http");

class JobQueue {
  constructor() {
    this.queue = [];
  }

  add(job, retries = 3) {
    this.queue.push({ job, retries });
  }

  async process() {
    if (!this.queue.length) return;

    const item = this.queue.shift();
    try {
      await item.job();
      console.log("Job success");
    } catch {
      if (item.retries > 0) {
        item.retries--;
        setTimeout(() => this.queue.push(item), 1000);
      }
    }
  }
}

const queue = new JobQueue();
setInterval(() => queue.process(), 500);

http.createServer((req, res) => {
  queue.add(() => Promise.reject("fail"));
  res.end("Job queued");
}).listen(5000);
