import { useRef } from "react";

export default function App() {
  const count = useRef(0);
  count.current++;

  return <h1>Renders: {count.current}</h1>;
}
