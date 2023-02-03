
import { Route, Routes } from "react-router-dom";
import { Append } from "../pages/append";
import { Cart } from "../pages/cart";
import { Home } from "../pages/home";

import Login from "../pages/login";
import Signup from "../pages/signup";
import { Product } from "../pages/product";
import PrivateRoute from "./privateroute";

function Allroutes(){
   return(
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brands" element={<PrivateRoute><Append/></PrivateRoute>}/>
        <Route path="/brands/:id" element={<PrivateRoute><Product/></PrivateRoute>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
    </Routes>
</div>
   )
}
export{Allroutes}

