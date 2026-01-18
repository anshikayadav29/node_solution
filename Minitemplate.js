// template-compiler.js
function compile(tpl, data) {
  return tpl.replace(/\{\{(.*?)\}\}/g, (_, k) => {
    return Function("data", `with(data){ return ${k} }`)(data);
  });
}

console.log(
  compile("Sum: {{a+b}}", { a: 2, b: 3 })
);
