// leak.js
setInterval(() => {
  console.log(process.memoryUsage().heapUsed);
}, 2000);
