const http = require("http");
let times = [];

http.createServer((req,res)=>{
  const t = Date.now();
  setTimeout(()=>{
    times.push(Date.now()-t);
    const avg = times.reduce((a,b)=>a+b,0)/times.length;
    res.end("Avg "+avg.toFixed(2));
  }, Math.random()*500);
}).listen(5000);
