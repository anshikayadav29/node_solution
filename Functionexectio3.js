// profiler.js
function profile(fn) {
  return (...args) => {
    const start = process.hrtime.bigint();
    const res = fn(...args);
    const end = process.hrtime.bigint();
    console.log("Time:", Number(end - start) / 1e6, "ms");
    return res;
  };
}
