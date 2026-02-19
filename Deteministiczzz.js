const http = require("http");
const steps = ["Validate","Process","Save"];
let i = 0;

http.createServer((_,res)=>{
  const step = steps[i++ % steps.length];
  res.end("Step: "+step);
}).listen(5000);
