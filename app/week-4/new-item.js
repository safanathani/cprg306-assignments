"use client";

import { useState } from "react";

export default function NewItem() {
  const [count, setCount] = useState(1);

  function increase() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function getButtonStyle(isDisabled) {
    return [
      "w-9 h-9 flex items-center justify-center rounded-md text-base font-bold text-white",
      isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600",
    ].join(" ");
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-black p-6">
      <div className="flex items-center space-x-3 bg-white p-2 shadow-md">
        <span className="w-12 h-10 flex items-center justify-center border rounded-md text-lg font-extrabold text-black">
          {count}
        </span>

        <button
          onClick={decrease}
          disabled={count === 1}
          className={getButtonStyle(count === 1)}
        >
          −
        </button>

        <button
          onClick={increase}
          disabled={count === 20}
          className={getButtonStyle(count === 20)}
        >
          +
        </button>
      </div>
    </div>
  );
}
