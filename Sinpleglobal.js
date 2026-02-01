import { createContext, useContext, useState } from "react";

const C = createContext();

function Child() {
  const { count } = useContext(C);
  return <h2>{count}</h2>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <C.Provider value={{ count }}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child />
    </C.Provider>
  );
}
