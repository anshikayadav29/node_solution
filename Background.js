const http = require("http");
let jobs = [];

setInterval(() => {
  if (jobs.length) console.log("Processed:", jobs.shift());
}, 2000);

http.createServer((req, res) => {
  jobs.push(Date.now());
  res.end("Job Added");
}).listen(5000);
