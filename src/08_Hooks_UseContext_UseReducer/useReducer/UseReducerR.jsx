import React, { useReducer } from 'react';

const fnReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerR = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(fnReducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6">
        <h2 className="text-lg font-bold mb-4">useReducerR</h2>
        <p className="mb-4">Count: {state.count}</p>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerR;
