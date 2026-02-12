const http = require("http");

class Repo {
  get(){ return ["A","B","C"]; }
}
class Controller {
  constructor(repo){this.repo=repo;}
  handle(res){res.end(this.repo.get().join(","));}
}

const c=new Controller(new Repo());

http.createServer((r,res)=>c.handle(res)).listen(5000);
