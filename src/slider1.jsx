import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./slider.module.css"
const images=[
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/DX170_HomepageBanner_Mobile_1000x.jpg?v=1661155911"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/Shouer-S12_HomepageBanner_Mobile_1000x.jpg?v=1661157355"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/KA-Series_HomepageBanner_Mobile_1000x.jpg?v=1661158213"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/Altiat-Cal10_HomepageBanner_Mobile_1000x.jpg?v=1661337041"}
]
function Slider(){
    const[count,setcount]=useState(0)
    const ref=useRef(null)
 useEffect(()=>{
    ref.current=setInterval(() => {
        setcount((pre)=>{
       if(pre==images.length-1){
            console.log(pre)
         pre=0
         return(pre)
        }else{
           return( pre+1)
        }
      })
    }, 5000);
 return(()=>
 clearInterval(ref.current)
 )
  },[])
  return(
        <div className={styles.slider1}>
<img src={images[count].image}></img>
</div>
    )
}
export{Slider}