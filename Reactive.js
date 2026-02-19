const http = require("http");
let value = 0;
const subs = [];

function notify(){ subs.forEach(fn=>fn(value)); }

subs.push(v=>console.log("Updated:",v));

http.createServer((_,res)=>{
  value++;
  notify();
  res.end("Value: "+value);
}).listen(5000);
