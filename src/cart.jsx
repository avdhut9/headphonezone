import { useContext, useEffect, useReducer, useState } from "react"
import { context } from "./context"
import styles from "./cart.module.css"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

function Cart(){
 
    const[data,setdata]=useState([])
    
    
    
    useEffect(()=>{
getdata()
    },[])
    async function getdata(){
        const url="https://avadhut0511.herokuapp.com/posts"
        const res=await fetch(url)
        const data1=await res.json()
        setdata(data1)
    }
   function add(id){
    let update=data.map((ele)=>{
        if(ele.id===id){
            ele.quantity=ele.quantity+1
         
        }
        return ele
       
    })
    setdata([...update])
   }
   function minus(id){
    let update=data.map((ele)=>{
        if(ele.id===id){
            ele.quantity=ele.quantity-1
         
        }
        return ele
       
    })
    setdata([...update])
   }function max(){
    let jast=0;
    for(let i=0;i<=data.length-1;i++){
        jast=jast+data[i].quantity*data[i].price
    }
    return jast
   }
    return(
        <div className={styles.cart}>
           <span> <Navbar/></span>
         {data.map((ele)=>
            <div className={styles.change}>
                <div>
         <img  src={ele.image} alt="" />
         </div>
         <div>
                 <p>{ele.name}</p>
                 <p>{ele.name1}</p>
                 <p>Rs {ele.price}/-</p>
                 </div>
                 <div>
                 <button onClick={()=>add(ele.id)} >+</button>
                 <button>{ele.quantity}</button>
                 <button disabled={data.quantity<1} onClick={()=>minus(ele.id)}>-</button>
                 </div>
                 <div>
                 <p>Total Price:{ele.quantity*ele.price}/-</p>
                 </div>
                 </div>
         )}
         <p className={styles.er}>Total:{max()}/-</p>
    
        <div className={styles.foot}>
        <Footer/>
        </div>
        </div>
    )
}
export{Cart}