import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2">
      <input
        ref={inputRef}
        type="text"
        className="border-2 border-gray-500 rounded-lg px-2 py-1"
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
        className="bg-indigo-500 text-white px-2 py-1 rounded-lg cusor-pointer"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
