import { useReducer } from "react";
import { createContext } from "react";

export const Textcontext=createContext();
const initialdata={
    username:"",
    islogin:false,
    issignup:false,
     id:""
    }
    function reducer(state,action){
switch(action.type){
    case "user":
        return{
            ...state,username:action.payload
        };
        case "login":
            return{
            ...state,islogin:true,issignup:true
        };
        case "signup":
            return{
                ...state,issignup:true,islogin:false
            };
            case "id":
                return{
                   ...state,id:action.payload
                };
                case "logout":
                    return{
                        ...state,islogin:false
                    }
        
default:
    return state

    
}

    }
export default function ContextProvider({children}){
    const[state,dispatch]=useReducer(reducer,initialdata)
    return(
        <Textcontext.Provider value={{state,dispatch}}>
{children}
        </Textcontext.Provider>
    )
}