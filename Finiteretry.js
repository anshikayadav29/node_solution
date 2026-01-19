// retry-fsm.js
class Retry {
  constructor(n){this.n=n}
  async run(fn){
    while(this.n--) try{return await fn()}catch{}
  }
}
