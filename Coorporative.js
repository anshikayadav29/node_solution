const http = require("http");

const tasks = [];
function spawn(fn){ tasks.push(fn); }

spawn(()=>console.log("A"));
spawn(()=>console.log("B"));

http.createServer((_,res)=>{
  while(tasks.length) tasks.shift()();
  res.end("Tasks Done");
}).listen(5000);
