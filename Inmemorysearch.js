// search-engine.js
class Search {
  constructor() {
    this.index = {};
  }

  add(doc) {
    doc.split(" ").forEach(w => {
      (this.index[w] ||= []).push(doc);
    });
  }

  find(word) {
    return this.index[word] || [];
  }
}
