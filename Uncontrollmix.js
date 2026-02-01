import { useRef, useState } from "react";

export default function App() {
  const ref = useRef();
  const [value, setValue] = useState("");

  return (
    <>
      <input ref={ref} />
      <button onClick={() => setValue(ref.current.value)}>
        Copy
      </button>
      <p>{value}</p>
    </>
  );
}
