const http = require("http");

const cmds = {
  "/start":()=> "Started",
  "/stop":()=> "Stopped"
};

http.createServer((req,res)=>{
  res.end(cmds[req.url]?.() || "Unknown");
}).listen(5000);
