
// event-counter.js
const EventEmitter = require("events");
const event = new EventEmitter();

let count = 0;
event.on("hit", () => console.log(++count));
event.emit("hit");
event.emit("hit");
