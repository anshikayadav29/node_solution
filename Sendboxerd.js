// sandbox.js
const vm = require("vm");

function run(code) {
  const ctx = vm.createContext({});
  return vm.runInContext(code, ctx, { timeout: 1000 });
}
