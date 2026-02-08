const http = require("http");

let tasks = [];

function runTask() {
  if (tasks.length === 0) return;
  const task = tasks.shift();
  setTimeout(() => console.log("Done:", task.name), task.time);
}

setInterval(runTask, 1000);

http.createServer((req, res) => {
  tasks.push({ name: req.url, time: Math.random() * 3000 });
  res.end("Task Added");
}).listen(5000);
