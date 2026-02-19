const http = require("http");
const subs = [];

function publish(msg){ subs.forEach(fn => fn(msg)); }
subs.push(m => console.log("EVENT:", m));

http.createServer((req,res)=>{
  publish(req.url);
  res.end("Published");
}).listen(5000);
