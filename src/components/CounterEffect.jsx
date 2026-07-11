import { useEffect, useState } from "react";

const CounterEffect = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);

  return (
    <div>
      <h1 className="">{count}</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
        className="bg-blue-500"
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount((c) => c - 1);
          }
        }}
        className="bg-red-500"
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterEffect;
