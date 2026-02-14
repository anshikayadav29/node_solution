const http = require("http");

class Scheduler {
  queue = [];
  add(task, priority) {
    this.queue.push({ task, priority });
    this.queue.sort((a,b)=>b.priority-a.priority);
  }
  run() {
    if(this.queue.length) this.queue.shift().task();
  }
}

const s = new Scheduler();
setInterval(()=>s.run(),500);

http.createServer((req,res)=>{
  s.add(()=>console.log("High Task"), Math.random()*10);
  res.end("Scheduled");
}).listen(5000);
