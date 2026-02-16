const http = require("http");

class Container {
  services = {};
  register(name, fn){ this.services[name]=fn; }
  resolve(name){ return this.services[name](); }
}

const c = new Container();
c.register("time", ()=>Date.now());

http.createServer((req,res)=>{
  res.end("Time: " + c.resolve("time"));
}).listen(5000);
