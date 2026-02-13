const http = require("http");

class ServiceLocator {
  static services = {};
  static register(name, service){ this.services[name]=service; }
  static get(name){ return this.services[name]; }
}

ServiceLocator.register("msg", { get:()=> "Hello" });

http.createServer((r,res)=>{
  res.end(ServiceLocator.get("msg").get());
}).listen(5000);
