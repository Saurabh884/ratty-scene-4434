import React from 'react'

import { useState } from 'react'

import {useNavigate } from 'react-router-dom'
import styles from "./Cart.module.css"
import { CartItem } from './CartItem'
import Navbar from './Navbar'




export const Cart = () => {

     const [add1, setAdd1] = useState(null);
     const [add2, setAdd2] = useState(null);
     const [pin, setPin] = useState(null);


  let cart = JSON.parse(localStorage.getItem("cartData"))||[]
  const navigate=useNavigate()

  const totalPrice=cart.reduce((acc,item)=>{
    return acc+item.qty*item.price
  },0)

  console.log(totalPrice)

  const checkout=()=>{
    alert("You will be redirected to payment page")
    navigate("/checkout")
  }

  const addressSubmit =()=>{

    if(add1==null || add2==null || pin==null)
    {
      alert("Please fill all details")
    }
    else
    {
      alert("Your address has been added")
      window.location.reload()
    }
   

  }

  return (
    <div>
     <Navbar/>

     <div className={styles.mainCart}>
          
          <div className={styles.cartItem}>
               <h2>Summary</h2>
               <div>
                {cart.map(function(elem){
                  return <div key={elem.id}><CartItem elem={elem} cart={cart}/></div>
                })}
               </div>
          </div>
          <div className={styles.summary}>
            <h3>Payment Summary</h3>
            <div className={styles.item_total_box}>
              <div>Item Total</div>
              <div>{cart.reduce((acc,item)=>{return acc+item.qty},0)}</div>
            </div>
            <div className={styles.member}>
              <div>Membership Discount</div>
              <div>100</div>
            </div>
            <div className={styles.convenience}>
              <div>Convenience Fee</div>
              <div>99</div>
            </div>
            <div className={styles.plus}>
              <div>Plus Membership</div>
              <div>99</div>
            </div>
            <div className={styles.total_p}>
              <div>Total</div>
              <div>₹ {totalPrice+98}</div>
            </div>
            <hr />
            <h2>Enter Address Details</h2>
            <div className={styles.address}>

            <input type="text" onChange={(e)=>setAdd1(e.target.value)} placeholder="Enter address line1" />
            <input type="text"  onChange={(e)=>setAdd2(e.target.value)}  placeholder="Enter address line2" />

         
            </div>
           
            <div className={styles.pin}>
              <h3>Pin:</h3>

              <input type="password"  onChange={(e)=>setPin(e.target.value)}  placeholder="Enter pin code" />

       
            </div>
            <button className={styles.submitBtn} onClick={addressSubmit} >Submit</button>
            <hr />

            <button className={styles.pay_btn} onClick={checkout}>Pay₹{totalPrice +98}</button>
            
          </div>

     </div>

    </div>
  )
}
