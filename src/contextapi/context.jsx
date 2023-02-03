import { createContext, useState } from "react";

export const context=createContext()
function Contextprovider({children}){
    const[data3,setdata3]=useState([])
  
 function insert(info){
    setdata3([...data3,...info])
    
 }
 console.log(data3)
   return(
    <context.Provider value={{data3,insert}}>
    {children}
</context.Provider>
   )
}
export{Contextprovider}