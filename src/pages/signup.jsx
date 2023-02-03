import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { Textcontext } from "../contextapi/taskcontext";
import styles from "./signup.module.css"
const initialdata={
    email:"",
    username:"",
    password:"",
    confirmpassword:""
}
export default function Signup(){
    const[formdata,setformdata]=useState(initialdata)
    const {state,dispatch}=useContext(Textcontext);
    async function submit(e){
e.preventDefault();
if(formdata.password!==formdata.confirmpassword){
    alert("confirmpassword should match with password")
}
else{
  try{
    const res=await fetch("https://erin-agreeable-viper.cyclic.app/data3",{
        method:"POST",
        body:JSON.stringify(formdata),
        headers:{
            "Content-Type":"application/json"
        }
    })
    dispatch({type:"signup"})
  }catch(e){
    alert(e.message)
  }
}
    }
    function change(e){
        console.log(e)
const{name,value}=e.target;
setformdata({...formdata,
    [name]:value
})
    }
    console.log(formdata)
    return state.issignup?<Navigate to="/login"/>:(
        <div className={styles.parent}>
        <h1>REGISTER</h1>
        <h3>Please fill in the fields below:</h3>
    
         <form onSubmit={submit}  >
         <div>
            <input className={styles.input} type="text" name="email" onChange={change} placeholder="Email" />
</div>
<div>
<input className={styles.input} type="text" name="username" onChange={change} placeholder="Username" />
</div>

<div>

     <input className={styles.input} type="text" name="password" onChange={change} placeholder="Password"/>
   </div>
   <div>

     <input className={styles.input} type="text" name="confirmpassword" onChange={change} placeholder="Confirmpassword"/>
   </div>
<input type="submit" className={styles.sub} value="REGISTER" />
 </form>
 
  </div>
    )

}