const http = require("http");

class FSM {
  constructor() { this.state = "IDLE"; }
  transition(event) {
    const map = {
      IDLE: { start: "RUNNING" },
      RUNNING: { stop: "STOPPED" },
      STOPPED: { reset: "IDLE" }
    };
    this.state = map[this.state]?.[event] || this.state;
  }
}

const fsm = new FSM();

http.createServer((req,res)=>{
  fsm.transition(req.url.slice(1));
  res.end("STATE: " + fsm.state);
}).listen(5000);
