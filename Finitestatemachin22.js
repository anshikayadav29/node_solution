// fsm.js
class FSM {
  constructor(init) {
    this.state = init;
    this.transitions = {};
  }
  add(from, to) {
    (this.transitions[from] ||= []).push(to);
  }
  go(to) {
    if (this.transitions[this.state]?.includes(to)) {
      this.state = to;
    }
  }
}

const f = new FSM("idle");
f.add("idle", "running");
f.go("running");
console.log(f.state);
