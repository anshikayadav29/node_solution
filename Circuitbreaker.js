// circuit-breaker.js
class CB{
  constructor(t=3){this.f=0;this.open=false;this.t=t}
  async exec(fn){if(this.open)throw"OPEN";try{const r=await fn();this.f=0;return r}catch(e){if(++this.f>=this.t)this.open=true;throw e}}
}
