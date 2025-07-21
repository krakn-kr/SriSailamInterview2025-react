import React, { useState } from 'react'
import MyContext from './MyContext';
import Child from './Child';


const Parent = () => {
    const [value, setValue] = useState({
        userName: "KRAKN",
        email:"krashokkumarnaidu@gmail.com",
        address:{
            city:"Hyderabad",
            village: "Raidurg",
            building: "Galaxy"
        }});
    
    
  return (
    <>
        <div>Parent</div>
        <MyContext.Provider value = {{value,setValue}}>
        <Child></Child>
        </MyContext.Provider>
    
    </>
   
    
)
    
   
}

export default Parent