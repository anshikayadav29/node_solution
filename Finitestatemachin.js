// fsm.js
class FSM{
  constructor(s){this.s=s;this.t={}}
  on(a,from,to){this.t[`${from}:${a}`]=to}
  do(a){this.s=this.t[`${this.s}:${a}`]||this.s}
}
