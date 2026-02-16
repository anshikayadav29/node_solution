const http = require("http");

let running = 0;
const limit = 2;

function task() {
  return new Promise(r => setTimeout(r, 1000));
}

http.createServer(async (req,res)=>{
  if (running >= limit) return res.end("Queue Full");
  running++;
  await task();
  running--;
  res.end("Done");
}).listen(5000);
