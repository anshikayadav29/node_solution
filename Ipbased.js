// rate-limiter.js
const limits = new Map();

function rateLimit(ip, limit = 5) {
  const now = Date.now();
  if (!limits.has(ip)) limits.set(ip, []);
  const hits = limits.get(ip).filter(t => now - t < 60000);
  hits.push(now);
  limits.set(ip, hits);
  return hits.length <= limit;
}

console.log(rateLimit("1.1.1.1"));
