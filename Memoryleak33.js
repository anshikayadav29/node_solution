// leak-detector.js
setInterval(() => {
  console.log(process.memoryUsage().heapUsed);
}, 1000);
