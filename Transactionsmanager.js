// transaction.js
class Transaction {
  constructor() {
    this.actions = [];
  }

  add(doIt, undoIt) {
    this.actions.push({ doIt, undoIt });
  }

  commit() {
    this.actions.forEach(a => a.doIt());
  }

  rollback() {
    this.actions.reverse().forEach(a => a.undoIt());
  }
}
