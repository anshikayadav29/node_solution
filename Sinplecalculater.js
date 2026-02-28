function calculator(a, b) {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: b !== 0 ? a / b : "Cannot divide by zero"
  };
}

console.log(calculator(10, 5));
