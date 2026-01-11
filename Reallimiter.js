// rate-core.js
let count=0;
setInterval(()=>count=0,1000);
require("http").createServer((r,s)=>{
  if(++count>3) s.end("Blocked");
  else s.end("OK");
}).listen(5000);
