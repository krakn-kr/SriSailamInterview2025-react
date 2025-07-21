import React, { useState } from 'react'

const useStateR = () => {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Incement</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default useStateR