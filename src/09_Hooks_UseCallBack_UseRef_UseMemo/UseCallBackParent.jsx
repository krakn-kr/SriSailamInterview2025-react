import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild';

const UseCallBackParent = () => {
    const [count, setcount] = useState(0);
    const [other,setOther] = useState(100);

    const handleIncrement = useCallback(()=>{
        setcount(prev=>prev+1);
    },[]);
    console.log(handleIncrement);
    
    console.log("Parent rendered");
    
  return (
    <div>
        <h1>UseCallBackParent</h1>
        <p>Count: {count}</p>
        <p><strong>Other Count:</strong>{other}</p>
        <button 
        onClick={()=>setOther(other+1)}
        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
        >Increment Other</button>
        <UseCallBackChild onIncrement = {handleIncrement} />
    </div>
  )
}

export default UseCallBackParent