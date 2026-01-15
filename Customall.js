// promise-all.js
function myAll(promises) {
  return new Promise((res, rej) => {
    let out = [], done = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(v => {
        out[i] = v;
        if (++done === promises.length) res(out);
      }).catch(rej);
    });
  });
}
