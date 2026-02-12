const http = require("http");

class Command { execute(res){} }
class Ping extends Command { execute(res){res.end("PONG");}}
class Time extends Command { execute(res){res.end(Date.now().toString());}}

const map={ "/ping":Ping, "/time":Time };

http.createServer((r,res)=>{
  const Cmd=map[r.url]||Ping;
  new Cmd().execute(res);
}).listen(5000);
