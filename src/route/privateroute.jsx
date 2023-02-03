import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Textcontext } from "../contextapi/taskcontext"

export default function PrivateRoute({children}){
    const {state,dispatch}=useContext(Textcontext)
 
    if(!state.islogin){
        return <Navigate to="/login"/>
    }
    return children
}