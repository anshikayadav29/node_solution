const http = require("http");
const os = require("os");

http.createServer((_,res)=>{
  const load = os.loadavg()[0];
  res.end("CPU Load: "+load.toFixed(2));
}).listen(5000);
