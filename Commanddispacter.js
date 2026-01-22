// dispatcher.js
class Dispatcher {
  constructor(){this.cmds={}}
  register(c,f){this.cmds[c]=f}
  run(c,a){this.cmds[c]?.(a)}
}
