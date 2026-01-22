// version-store.js
class Store {
  constructor(){this.v=[]}
  save(o){this.v.push(JSON.parse(JSON.stringify(o)))}
  get(i){return this.v[i]}
}
