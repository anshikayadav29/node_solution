// session.js
const sessions = {};
function create() {
  const id = Math.random().toString(36);
  sessions[id] = {};
  return id;
}
