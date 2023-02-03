
import { Route, Routes } from "react-router-dom";
import { Append } from "../pages/append";
import { Cart } from "../pages/cart";
import { Home } from "../pages/home";

import Login from "../pages/login";
import Signup from "../pages/signup";
import { Product } from "../pages/product";

function Allroutes(){
   return(
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brands" element={<Append/>}/>
        <Route path="/brands/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
    </Routes>
</div>
   )
}
export{Allroutes}

