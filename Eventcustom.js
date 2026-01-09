// custom-event.js
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("start", () => console.log("Event Started"));
event.emit("start");
