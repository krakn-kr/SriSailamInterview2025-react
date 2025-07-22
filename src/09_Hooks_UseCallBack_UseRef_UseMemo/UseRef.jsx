import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef();

    const focusInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>UseRef</h1>
        <input ref={inputRef} className='py-2 px-4 border border-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button onClick={focusInput}  className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
>focusInput</button>
    </div>
  )
}

export default UseRef