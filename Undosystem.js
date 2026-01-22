// undo-redo.js
class History {
  constructor() {
    this.stack = [];
    this.redoStack = [];
  }
  do(action) {
    this.stack.push(action);
    action();
  }
  undo() {
    const a = this.stack.pop();
    this.redoStack.push(a);
  }
}
