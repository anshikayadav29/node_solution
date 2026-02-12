const http = require("http");

class Observer {
  notify(msg){console.log(msg);}
}
class Server {
  constructor(){ this.obs=[]; }
  subscribe(o){ this.obs.push(o); }
  fire(){ this.obs.forEach(o=>o.notify("Hit")); }
}

const s=new Server();
s.subscribe(new Observer());

http.createServer((r,res)=>{
  s.fire(); res.end("Observed");
}).listen(5000);
