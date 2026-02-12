const http = require("http");

class Home { handle(res){res.end("Home");}}
class Admin { handle(res){res.end("Admin");}}

class Factory {
  static get(path){
    return path==="/admin"?new Admin():new Home();
  }
}

http.createServer((req,res)=>{
  Factory.get(req.url).handle(res);
}).listen(5000);
