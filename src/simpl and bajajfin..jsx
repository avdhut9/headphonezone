import styles from "./bajaj.module.css"

function Bajaj(){
    return(
        <div className={styles.parent}>
            <div className={styles.bajaj}>
            <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/simpl-homepage_238x.png?v=1661144152" alt="" />
            <h2>10% CASHBACK UP TO ₹750 ON ORDERS ABOVE ₹3,999/-</h2>
            <p>Valid from 21st August to 31st August
Tenure Available: 3 Months
Transaction Value for Cashback: Rs. 3,999
Payment Gateway: Select Simpl Pay in 3 at Checkout to transact with Simpl</p>
            </div>
            <div className={styles.bajaj}>
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphones-Zone-bajaj-finserv-logo_254x.png?v=1657960437" alt="" />
                <h2>NO COST EMI WITH BAJAJ FINSERV</h2>
                <p>Tenure available: 3 Months
Eligibility: All Bajaj Finserv card owners
Transaction value: Available on all orders above Rs. 4,500/-
Payment Gateway: Choose Razorpay at checkout</p>
            </div>
         
        </div>
    )
}
export{Bajaj}