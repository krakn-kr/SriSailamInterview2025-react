import React from 'react'
import useCustomHook from './useCustomHook';

const UseCustomHookUse = () => {
    const [count,increment,decrement] = useCustomHook();
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment} className='py-2 px-4 border rounded-md text-white bg-slate-400 hover:bg-slate-700 first-letter:uppercase'>increment</button> <br/>
        <button onClick={decrement} className='py-2 px-4 border rounded-md text-white bg-slate-400 hover:bg-slate-700 first-letter:uppercase'>decrement</button>
    </div>
  )
}

export default UseCustomHookUse;