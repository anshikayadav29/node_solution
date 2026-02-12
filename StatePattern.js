const http = require("http");

class Online { handle(res){res.end("Online");}}
class Offline { handle(res){res.end("Offline");}}

class Server {
  constructor(){ this.state=new Online(); }
  toggle(){ this.state=this.state instanceof Online?new Offline():new Online();}
  handle(res){ this.state.handle(res);}
}

const s=new Server();
setInterval(()=>s.toggle(),3000);

http.createServer((r,res)=>s.handle(res)).listen(5000);
