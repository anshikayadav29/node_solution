// template.js
function render(tpl, data) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => data[k] || "");
}
