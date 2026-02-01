import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setValue(text), 500);
    return () => clearTimeout(t);
  }, [text]);

  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <p>Searching: {value}</p>
    </>
  );
}
