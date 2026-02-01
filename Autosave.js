import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState(
    localStorage.getItem("data") || ""
  );

  useEffect(() => {
    localStorage.setItem("data", text);
  }, [text]);

  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}
