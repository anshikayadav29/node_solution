const http = require("http");

class Saga {
  steps=[];
  add(step,comp){ this.steps.push({step,comp}); }
  execute(){
    const done=[];
    try{
      this.steps.forEach(s=>{ s.step(); done.push(s); });
    }catch{
      done.reverse().forEach(s=>s.comp());
    }
  }
}

const saga = new Saga();

http.createServer((req,res)=>{
  saga.execute();
  res.end("Saga Done");
}).listen(5000);
