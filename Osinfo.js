// os-info.js
const os = require("os");

console.log({
  platform: os.platform(),
  cpu: os.cpus().length,
  memory: os.totalmem()
});
