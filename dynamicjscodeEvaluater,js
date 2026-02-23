const http = require("http");
const vm = require("vm");

http.createServer((req,res)=>{
  const code = req.url.slice(1) || "2+2";
  res.end(String(vm.runInNewContext(code)));
}).listen(5000);
