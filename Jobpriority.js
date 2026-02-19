const http = require("http");
const jobs = [];

http.createServer((req,res)=>{
  jobs.push({p: Math.random(), t: Date.now()});
  jobs.sort((a,b)=>b.p-a.p);
  res.end("Top job priority: "+jobs[0].p.toFixed(2));
}).listen(5000);
