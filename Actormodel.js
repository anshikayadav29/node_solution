// actor.js
class Actor {
  constructor() {
    this.mailbox = [];
    this.processing = false;
  }

  send(msg) {
    this.mailbox.push(msg);
    this.process();
  }

  async process() {
    if (this.processing) return;
    this.processing = true;

    while (this.mailbox.length) {
      const msg = this.mailbox.shift();
      await this.receive(msg);
    }
    this.processing = false;
  }

  async receive(msg) {
    console.log("Received:", msg);
  }
}

const actor = new Actor();
actor.send("Hello");
actor.send("World");
