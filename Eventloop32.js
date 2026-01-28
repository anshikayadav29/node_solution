const queue = [];

function mySetTimeout(fn) {
  queue.push(fn);
}

mySetTimeout(() => console.log("Task 1"));
mySetTimeout(() => console.log("Task 2"));

while (queue.length) {
  const task = queue.shift();
  task();
}
