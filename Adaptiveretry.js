// backoff.js
async function retry(fn, max) {
  let delay = 100;
  for (let i = 0; i < max; i++) {
    try { return await fn(); }
    catch {
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
}
