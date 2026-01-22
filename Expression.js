// interpreter.js
function evalExpr(expr) {
  return Function(`"use strict";return (${expr})`)();
}

console.log(evalExpr("2 + 3 * 4"));
