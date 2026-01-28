class Cache {
  constructor() {
    this.store = new Map();
  }

  set(key, val, ttl) {
    this.store.set(key, val);
    setTimeout(() => this.store.delete(key), ttl);
  }

  get(key) {
    return this.store.get(key);
  }
}

const cache = new Cache();
cache.set("user", "Anshika", 2000);
setTimeout(() => console.log(cache.get("user")), 3000);
