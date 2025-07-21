import React from "react";

const UseCallBackChild = React.memo(({ onIncrement }) => {
  console.log("Child rendered");

  return (
    <div>
      <h1>UseCallBackChild</h1>
      <button
        onClick={onIncrement}
        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
      >
        Increment
      </button>
    </div>
  );
});

export default UseCallBackChild;
