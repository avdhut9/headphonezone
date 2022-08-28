import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./slider.module.css"
const images=[
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/DX170_HomepageBanner_Desktop_2160x.jpg?v=1661155879"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/Altiat-Cal10_HomepageBanner_Desktop_1400x.jpg?v=1661336399"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/Shouer-S12_HomepageBanner_Desktop_1400x.jpg?v=1661157094"},
    {image:"https://cdn.shopify.com/s/files/1/0153/8863/files/KA-Series_HomepageBanner_Desktop_1400x.jpg?v=1661158197"}
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