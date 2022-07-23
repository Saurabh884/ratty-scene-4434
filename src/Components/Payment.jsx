import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import styles from "./Payment.module.css"


const Payment = () => {
    const [card ,setCard] = useState(null);
    const [validity ,setValidity] = useState(null);
    const [cvv,setCvv] = useState(null)
   
    let cart = JSON.parse(localStorage.getItem("cartData"))||[];
  const totalPrice=cart.reduce((acc,item)=>{
    return acc+item.qty*item.price
  },0)

    const navigate = useNavigate();
   const finalPayment=()=>{
    if(card==null || validity==null || cvv==null)
    {
        alert("Please fill all details")
    }
    else
    {
        alert("Your payment has been done and order has been placed successfully!")
        navigate("/")
    }
   
   
   }

  return (
    <div>
         <div className={styles.finalPay}>

            <h2>Add new card</h2>
            <div className={styles.cardNumber}>
                <input onChange={(e)=>setCard(e.target.value)} type="number" placeholder='Card number' />
            </div>

            <div className={styles.dycvv}>
                <input onChange={(e)=>setValidity(e.target.value)} type="text" placeholder='MM/YY' />
                <input onChange={(e)=>setCvv(e.target.value)} type="password" placeholder='CVV' />

            </div>

            <div className={styles.placeOrder}>
                <div>₹{totalPrice}</div>
                <div> <button onClick={finalPayment}>Pay</button> </div>
            </div>
            
         </div>
    </div>
  )
}

export default Payment