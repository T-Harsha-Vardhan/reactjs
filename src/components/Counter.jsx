import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  const handleClick = () => setCounter((c) => c + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Counter;
