import { useContext, useEffect, useReducer, useState } from "react"
import { context } from "../contextapi/context"
import styles from "./cart.module.css"

import { Footer } from "../components/footer"

function Cart(){
 
    const[data,setdata]=useState([])
    
    
    
    useEffect(()=>{
getdata()
    },[])
    async function getdata(){
        const url="https://erin-agreeable-viper.cyclic.app/data1"
        const res=await fetch(url)
        const data1=await res.json()
        setdata(data1)
    }
   async function add(id){
    let update=data.map((ele)=>{
        if(ele.id===id){
            ele.quantity=ele.quantity+1
         
        }
        return ele
       
    })
     let x=update.find((ele)=>{
        return ele.id==id
    })
    const url=`https://erin-agreeable-viper.cyclic.app/data1/${id}`
        const res=await fetch(url,{
            method:"PATCH",
            body:JSON.stringify(x),
            headers:{
                "Content-Type":"application/json"
            }

        })
    getdata()
    
   }
   async function minus(id){
    let update=data.map((ele)=>{
        if(ele.id===id){
            ele.quantity=ele.quantity-1
         
        }
        return ele
       
    })
    let x=update.find((ele)=>{
        return ele.id==id
    })
    const url=`https://erin-agreeable-viper.cyclic.app/data1/${id}`
        const res=await fetch(url,{
            method:"PATCH",
            body:JSON.stringify(x),
            headers:{
                "Content-Type":"application/json"
            }

        })
    getdata()
   }function max(){
    let jast=0;
    for(let i=0;i<=data.length-1;i++){
        jast=jast+data[i].quantity*data[i].price
    }
    return jast
   }
   async function delect(id){
    try{
        const url=`https://erin-agreeable-viper.cyclic.app/data1/${id}`
        const res=await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }

        })
        getdata()
        
    }catch(e){

    }
   }
    return(
        <div className={styles.cart}>
        
         {data.map((ele)=>
            <div className={styles.change}>
                <div>
         <img  src={ele.image} alt="" />
         </div>
        <div className={styles.flex}>
        <div >
                 <p>{ele.name}</p>
                 <p>{ele.name1}</p>
                 <p>Rs {ele.price}/-</p>
                 </div>
                 <div>
                 <button  onClick={()=>add(ele.id)} >+</button>
                 <button>{ele.quantity}</button>
                 <button disabled={ele.quantity==1} onClick={()=>minus(ele.id)}>-</button>
                 </div>
                 <div>
                 <p>Total Price: {ele.quantity*ele.price}/-</p>
                 </div>
                 <div>
                    <button onClick={()=>delect(ele.id)}>delete</button>
                 </div>
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