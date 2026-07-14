import { useReducer, useState } from "react";
import { counterInitialState, counterReducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);
  const [inputValue, setInputValue] = useState(1);

  const handleClick = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-8">
      <h1 className="text-9xl text-black">{state.count}</h1>

      <input
        className="border-2 border-blue-500 px-2 h-10 rounded-lg text-center"
        type="number"
        id="amount"
        name="amount"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 cursor-pointer"
          onClick={() => {
            handleClick("increment");
          }}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 cursor-pointer"
          onClick={() => {
            handleClick("incrementByAmount", inputValue);
          }}
        >
          Increment by Amount
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 cursor-pointer"
          onClick={() => {
            handleClick("decrement");
          }}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 cursor-pointer"
          onClick={() => {
            handleClick("decrementByAmount", inputValue);
          }}
        >
          Decrement by Amount
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 cursor-pointer"
          onClick={() => {
            handleClick("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
