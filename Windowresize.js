import { useState, useEffect } from "react";

export default function App() {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const f = () => setW(window.innerWidth);
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  return <h1>Width: {w}</h1>;
}
