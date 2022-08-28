import { Route, Routes } from "react-router-dom";
import { Append } from "./append";
import { Cart } from "./cart";
import { Home } from "./home";
import { Navbar } from "./navbar";
import { Product } from "./product";

function Allroutes(){
   return(
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brands" element={<Append/>}/>
        <Route path="/brands/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
</div>
   )
}
export{Allroutes}