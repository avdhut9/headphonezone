import { useContext } from "react"
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Textcontext } from "../contextapi/taskcontext"

import styles from "./login.module.css"
const initialdata={
  
    username:"",
    password:"",
    
}
export default function Login(){
    const[formdata,setformdata]=useState(initialdata)
    const [data,setdata]=useState([])
     const {state,dispatch}=useContext(Textcontext);
   
   useEffect(()=>{
   getdata()
   },[])
   async function getdata(){
const res=await fetch("https://erin-agreeable-viper.cyclic.app/data3")
const data=await res.json();
setdata(data)
   }
    function change(e){
       
const{name,value}=e.target;
setformdata({...formdata,
    [name]:value
})
    }
    function submit(e){
e.preventDefault();
let x=data.find((ele)=>{
    return ele.username==formdata.username&&ele.password==formdata.password
})
if(!x){
   return  alert("unauthorized")
}
 dispatch({type:"login"})
 dispatch({type:"user",payload:x.username})
 dispatch({type:"id",payload:Number(x.id)})
    }
    console.log(formdata)
    return state.islogin?<Navigate to="/"/>:(
        <div className={styles.parent}>
              <h1>LOGIN</h1>
              <h3>Please enter your e-mail and password:</h3>
          
               <form onSubmit={submit}  >
       
     
    <div>

   

      <input className={styles.input} type="text" name="username" onChange={change} placeholder="Email" />
    </div>
    <div>
     
           <input className={styles.input} type="text" name="password" onChange={change} placeholder="Password"/>
         </div>
  <input type="submit" className={styles.sub} value="LOGIN" />
       </form>
       <div className={styles.signup}>New customer?<Link to="/signup">Create an account</Link></div>
        </div>
    )
}