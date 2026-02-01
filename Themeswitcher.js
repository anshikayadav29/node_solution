import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh"
    }}>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}
