import React, { useState } from "react";

const Task2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      {" "}
      <div className=" bg-blue-100 rounded-lg p-6 flex flex-col items-center w-[400px] gap-2 shadow-lg shadow-[#9a968b]">
        <span className="bg-rose-200 px-4 py-1 rounded-lg text-rose-500">
          {count}
        </span>
        <div className="flex gap-4 ">
          <button
            className=" mt-4 text-rose-500 bg-pink-300 p-2 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className=" mt-4 text-rose-500 bg-pink-300 p-2 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className=" mt-4 text-rose-500 bg-pink-300 p-2 rounded-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;
