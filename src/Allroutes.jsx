import { Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";

function Allroutes(){
   return(
    <div>
    <Routes>
        <Route path="/" element={<Navbar/>}/>
        
    </Routes>
</div>
   )
}
export{Allroutes}