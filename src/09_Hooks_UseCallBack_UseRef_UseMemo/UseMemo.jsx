import React, { useState } from 'react'
import ExpensiveComponent from './ExpensiveComponent';

const UseMemo = () => {
    const [input1,setInput1] = useState(1);
    const [input2,setInput2] = useState(2);
    const [input11,setInput11] = useState(1);
    const [input22,setInput22] = useState(2);
    const handleCalculation = ()=>{
        setInput11(input1);
        setInput22(input2);
    }
  return (

    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6">
    <h1 className="text-2xl font-bold text-gray-700 mb-4">Expensive Component Demo</h1>
    <div className="flex flex-col gap-4">
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="input1"
        value={input1}
        onChange={(e) => setInput1(Number(e.target.value))}
      />
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="input2"
        value={input2}
        onChange={(e) => setInput2(Number(e.target.value))}
      />
    </div>
    <ExpensiveComponent input1={input11} input2={input22} />
    <button
      onClick={handleCalculation}
      className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
    >
      Calculate
    </button>
  </div>
  )
}

export default UseMemo