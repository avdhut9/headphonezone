import { useContext, useEffect, useState } from "react";
import {useParams
} from "react-router-dom";
import { context } from "../contextapi/context";
import { Footer } from "../components/footer";

import styles from "./product.module.css"


function Product(){
    const data1=[{
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_700x.jpg?v=1579707573",
        name:"BEYERDYNAMIC - DT 770 PRO",
        name1:"Closed-Back Studio Headphone",
        price:10999,
        id:1,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-2_700x.jpg?v=1642057984",
        name:"SONY - WF-C500",
        name1:"Truly Wireless Earbuds With IPX4 ",
        price:5990,
        id:2,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477",
        name:"AUDIO-TECHNICA - ATH-M50",
        name1:"Closed-Back Studio Headphone",
        price:11999,
        id:3,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-03_400x.jpg?v=1644040398",
        name:"EPOS - PC 5 CHAT",
        name1:"Wired Headphones for Calls",
        price:1479,
        id:4,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_400x.jpg?v=1593432193",
        name:"BLON - BL-03",
        name1:" In-Ears With 1 Dynamic Driver",
        price:1990,
        id:5,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-BALCK-No-Mic-03_400x.jpg?v=1632819650",
        name:"FINAL - E1000 ",
        name1:"  In-Ears With 1 Dynamic Driver",
        price:1799,
        id:6,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-PurePlay-Z3-02_400x.jpg?v=1628258447",
        name:"LYPERTEK - PUREPLAY Z3",
        name1:"True Wireless Earbuds",
        price:6999,
        id:7,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_400x.jpg?v=1592332661",
        name:"HIFIMAN - SUNDARA (2022)",
        name1:"Planar Magnetic Open-Backs",
        price:27999,
        id:8,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_400x.jpg?v=1612869168",
        name:"MEZE - 12 CLASSICS V2",
        name1:" In-Ears With 1 Dynamic Driver",
        price:4499,
        id:9,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Black-02_400x.jpg?v=1645786248",
        name:"SONY - WH-XB910N",
        name1:" Noise Cancelling Wireless ",
        price:14899,
        id:10,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_700x.jpg?v=1579662488",
        name:"CCA - CRA",
        name1:" In-Ears With 1 Dynamic Driver",
        price:1399,
        id:11,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-2_700x.jpg?v=1642057984",
        name:"SONY - WH-1000XM4",
        name1:"Noise Cancelling Wireless ",
        price:24990,
        id:12,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477",
        name:"SONY 12345",
        name1:"Noise cancelleling",
        price:4500,
        id:13,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_700x.jpg?v=1579707573",
        name:"BEYERDYNAMIC - DT 770 PRO",
        name1:"Closed-Back Studio Headphone",
        price:10999,
        id:14,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-2_700x.jpg?v=1642057984",
        name:"SONY - WF-C500",
        name1:"Truly Wireless Earbuds With IPX4 ",
        price:5990,
        id:15,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477",
        name:"AUDIO-TECHNICA - ATH-M50",
        name1:"Closed-Back Studio Headphone",
        price:11999,
        id:16,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-03_400x.jpg?v=1644040398",
        name:"EPOS - PC 5 CHAT",
        name1:"Wired Headphones for Calls",
        price:1479,
        id:17,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_400x.jpg?v=1593432193",
        name:"BLON - BL-03",
        name1:" In-Ears With 1 Dynamic Driver",
        price:1990,
        id:18,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-BALCK-No-Mic-03_400x.jpg?v=1632819650",
        name:"FINAL - E1000 ",
        name1:"  In-Ears With 1 Dynamic Driver",
        price:1799,
        id:19,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-PurePlay-Z3-02_400x.jpg?v=1628258447",
        name:"LYPERTEK - PUREPLAY Z3",
        name1:"True Wireless Earbuds",
        price:6999,
        id:20,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_400x.jpg?v=1592332661",
        name:"HIFIMAN - SUNDARA (2022)",
        name1:"Planar Magnetic Open-Backs",
        price:27999,
        id:21,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_400x.jpg?v=1612869168",
        name:"MEZE - 12 CLASSICS V2",
        name1:" In-Ears With 1 Dynamic Driver",
        price:4499,
        id:22,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Black-02_400x.jpg?v=1645786248",
        name:"SONY - WH-XB910N",
        name1:" Noise Cancelling Wireless ",
        price:14899,
        id:23,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_700x.jpg?v=1579662488",
        name:"CCA - CRA",
        name1:" In-Ears With 1 Dynamic Driver",
        price:1399,
        id:24,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-2_700x.jpg?v=1642057984",
        name:"SONY - WH-1000XM4",
        name1:"Noise Cancelling Wireless Headphone",
        price:24990,
        id:25,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477",
        name:"SONY 12345",
        name1:"Noise cancelleling",
        price:4500,
        id:26,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-BALCK-No-Mic-03_400x.jpg?v=1632819650",
        name:"FINAL - E1000 ",
        name1:"  In-Ears With 1 Dynamic Driver",
        price:1799,
        id:27,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-PurePlay-Z3-02_400x.jpg?v=1628258447",
        name:"LYPERTEK - PUREPLAY Z3",
        name1:"True Wireless Earbuds",
        price:6999,
        id:28,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_400x.jpg?v=1592332661",
        name:"HIFIMAN - SUNDARA (2022)",
        name1:"Planar Magnetic Open-Backs",
        price:27999,
        id:29,
        quantity:1
    
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_400x.jpg?v=1612869168",
        name:"MEZE - 12 CLASSICS V2",
        name1:" In-Ears With 1 Dynamic Driver",
        price:4499,
        id:30,
        quantity:1
    
    },
    ]
    const contextdata=useContext(context)
    const{insert}=contextdata

    const params=useParams()
    const[data,setdata]=useState({})
    
   

    let{id}=params
    const[ok,setok]=useState(id)
    
   
   useEffect(()=>{
getdata()
   },[])

function getdata(){
  
 
 
let update= data1.find(function(ele){
    return (ele.id==ok)
 })
  
    setdata(update)
   }
   async function addtocart(id){
    try{
        let x=data1.find((ele)=>{
            return ele.id==id
        })
        const res=await fetch("https://erin-agreeable-viper.cyclic.app/data1",{
            method:"POST",
            body:JSON.stringify(x),
            headers:{
                "Content-Type":"application/json"
            }
        })
        alert("product added successfully")
    }catch(e){
   
        alert("something went wrong")
    }
    

   }
   console.log(data)

 
    return(
<div className={styles.product}>


       <div className={styles.split}>
        <div>
<img src={data.image} alt="" />
</div>
<div><p>{data.name}</p>
        <p>{data.name1}</p>
        <p>Rs {data.price}/-</p>
        <button onClick={()=>addtocart(data.id)}>Add to Cart</button>
        </div>
    
        </div>
       )
       <Footer/>
</div>
    )
}
export{Product}