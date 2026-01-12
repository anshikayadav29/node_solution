// memory-monitor.js
const os = require("os");

setInterval(() => {
  console.log("Free Memory:", os.freemem());
}, 2000);
