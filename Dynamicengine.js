// rule-engine.js
function runRule(rule, ctx) {
  return Function("ctx", `with(ctx){ return ${rule} }`)(ctx);
}
console.log(runRule("age>18", { age: 20 }));
