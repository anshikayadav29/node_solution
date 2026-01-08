// crash.js
const http = require("http");

http.createServer(() => {
  throw new Error("Crash!");
}).listen(5000);
