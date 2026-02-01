import { useState } from "react";

function Box() {
  return <h3>Mounted</h3>;
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Box />}
    </>
  );
}
