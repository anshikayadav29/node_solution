const http = require("http");
const nums = [];

http.createServer((_,res)=>{
  nums.push(Math.random()*100);
  const avg = nums.reduce((a,b)=>a+b,0)/nums.length;
  res.end("Avg: "+avg.toFixed(2));
}).listen(5000);
