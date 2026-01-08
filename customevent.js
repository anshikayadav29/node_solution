// event-bus.js
const http = require("http");
const EventEmitter = require("events");

const bus = new EventEmitter();

bus.on("login", user => console.log(user + " logged in"));

http.createServer((req, res) => {
  bus.emit("login", "Anshika");
  res.end("Event Triggered");
}).listen(5000);
