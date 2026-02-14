const http = require("http");
const EventEmitter = require("events");

class Kernel extends EventEmitter {
  boot() {
    this.emit("boot");
  }
}

const kernel = new Kernel();

kernel.on("boot", () => console.log("System Booted"));
kernel.on("request", (url) => console.log("Hit:", url));

http.createServer((req, res) => {
  kernel.emit("request", req.url);
  res.end("Kernel Response");
}).listen(5000);

kernel.boot();
