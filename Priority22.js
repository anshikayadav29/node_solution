// priority-scheduler.js
class Scheduler {
  constructor() {
    this.jobs = [];
  }

  add(job, priority) {
    this.jobs.push({ job, priority });
    this.jobs.sort((a, b) => b.priority - a.priority);
  }

  run() {
    while (this.jobs.length) {
      this.jobs.shift().job();
    }
  }
}
