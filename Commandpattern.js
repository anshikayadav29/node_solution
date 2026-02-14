const http = require("http");

const commands = {
  inc: () => ++state,
  dec: () => --state
};
let state = 0;

http.createServer((req,res)=>{
  const cmd = req.url.slice(1);
  res.end(String(commands[cmd]?.() ?? state));
}).listen(5000);
