


import { Link } from "react-router-dom"
import styles from "./headphones.module.css"
function Headphones(){
    return(
        <div>
        <h1>CHART TOPPING HEADPHONES</h1>
        <div className={styles.button}>
        <Link to="/brands">     <button > <p >Trending in Town</p></button></Link>
        <Link to="/brands"> <button><p>New Lanuches</p></button></Link>  
          <Link to="/brands"><button><p>Wfh</p></button></Link>  
           <Link to="/brands"> <button><p>Unboxed</p></button></Link>
        </div>
        <div className={styles.images}>
            <div> <Link to="/brands"><img src="https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_700x.jpg?v=1579662488" alt="" /></Link>
            <h2>BEYERDYNAMIC - DT 770 PRO</h2>
            <p>Closed-Back Studio Headphone</p>
<p>Sale priceFrom ₹ 10,999
Regular price₹ 17,050</p>
            </div>
        <div> <Link to="/brands"><img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-2_400x.jpg?v=1642057984" alt="" /></Link>   
        <h2>SONY - WF-C500
</h2><p>Truly Wireless Earbuds With IPX4 Rating</p>
<p>Sale price₹ 5,990
Regular price₹ 8,990</p></div>   
        <div><Link to="/brands"><img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477" alt="" /></Link>  
        <h2>AUDIO-TECHNICA - ATH-M50X
</h2>
        <p>Closed-Back Studio Headphone</p>
        <p>Sale price₹ 11,999
Regular price₹ 22,302</p></div>
           <div><Link to="/brands"><img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-03_400x.jpg?v=1644040398" alt="" /></Link> 
           <h2>EPOS - PC 5 CHAT
</h2>
           <p>Wired Headphones for Calls</p>
           <p>Sale price₹ 1,479
Regular price₹ 1,490</p></div>
           <div>  <Link to="/brands"><img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_400x.jpg?v=1593432193" alt="" /></Link> 
           <h2>BLON - BL-03
</h2>
           <p>In-Ears With 1 Dynamic Driver</p>
           <p>Sale price₹ 1,990
Regular price₹ 3,999</p></div>
         


        </div>
        <div className={styles.viewmore}>
            <Link className={styles.ok} to="/brands" ><button>View More</button></Link>
        </div>
        </div>
    )
}

export{Headphones}