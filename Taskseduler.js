// scheduler.js
setInterval(() => {
  if (new Date().getSeconds() === 0) console.log("Run job");
}, 1000);
