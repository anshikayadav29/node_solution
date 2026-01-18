// mem-fs.js
class MemFS {
  constructor() { this.fs = {}; }
  write(path, content) { this.fs[path] = content; }
  read(path) { return this.fs[path] || null; }
  delete(path) { delete this.fs[path]; }
}

const m = new MemFS();
m.write("/a.txt", "hello");
console.log(m.read("/a.txt"));
