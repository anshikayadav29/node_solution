const http = require("http");

class Engine {
  start(){ return "Engine ON"; }
}
class Car {
  constructor(engine){ this.engine = engine; }
  run(){ return this.engine.start(); }
}

http.createServer((r,res)=>{
  res.end(new Car(new Engine()).run());
}).listen(5000);
