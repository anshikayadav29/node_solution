const http = require("http");

class Service {
  message(){return "Injected";}
}
class Controller {
  constructor(service){this.service=service;}
  run(res){res.end(this.service.message());}
}

const controller=new Controller(new Service());

http.createServer((r,res)=>controller.run(res)).listen(5000);
