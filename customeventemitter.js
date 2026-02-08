const http = require("http");
const EventEmitter = require("events");

const emitter = new EventEmitter();
emitter.on("hit", () => console.log("Endpoint hit"));

http.createServer((req, res) => {
  emitter.emit("hit");
  res.end("Event Fired");
}).listen(5000);
