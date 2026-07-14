import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center gap-4">
      <h1 className="text-9xl">Timer: {count}</h1>
      <button
        onClick={() => clearInterval(intervalRef.current)}
        className="bg-indigo-600 text-white px-2 py-1 rounded-lg"
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
