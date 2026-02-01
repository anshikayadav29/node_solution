import { useState } from "react";

export default function App() {
  const [data, setData] = useState("Loading...");

  const load = () => {
    setTimeout(() => setData("Data Loaded"), 2000);
  };

  return (
    <>
      <button onClick={load}>Fetch</button>
      <p>{data}</p>
    </>
  );
}
