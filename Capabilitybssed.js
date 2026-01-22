// capability.js
function secure(obj, allowed) {
  return new Proxy(obj, {
    get(t, p) {
      if (!allowed.includes(p)) throw "Access Denied";
      return t[p];
    }
  });
}
