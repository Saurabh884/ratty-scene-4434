import React from 'react'
import styles from "./Checkout.module.css"
import Navbar from './Navbar'
import Footer from "./Footer"
import { NavLink } from 'react-router-dom'

export const Checkout = () => {
  let cart = JSON.parse(localStorage.getItem("cartData"))||[];
  const totalPrice=cart.reduce((acc,item)=>{
    return acc+item.qty*item.price
  },0)


  return (
    <div className={styles.main}>
          <div><Navbar/></div>
        <div className={styles.paymentContainer}>
          <div>
            <h2>Select payment method</h2>
            <p>Amount to pay:{totalPrice} </p>
          </div>
          <hr />

          <div>
            <h2>Debit Card Or Credit Card</h2>
            <div className={styles.debit}>
       <div><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto/images/monet/customer-app-monet/1622015769641-3fc187.png" alt="" /></div>   
       <NavLink to="/payment">    <div> <h4>Add A Card</h4></div>  </NavLink> 
            </div>
            <hr />
            <h2>UPI</h2>
            <div className={styles.upi}>
               <div><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto/images/monet/customer-app-monet/1622035138755-c9ea9d.png" alt="" /></div> 
               <div> <h4>Pay Via UPI ID</h4></div>
            </div>
            <hr />
            <h2>Wallet</h2>
            <div className={styles.wallet}>
               <div><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto/images/monet/customer-app-monet/1622035139912-c6c7d1.png" alt="" /></div> 
               <div> <h4>Paytm</h4></div>
            </div>
            <hr />
            <h2>Net Banking</h2>
            <div className={styles.net}>
               <div><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,q_auto:low,f_auto/images/monet/customer-app-monet/1622015760056-139840.png" alt="" /></div> 
               <div> <h4>Pay By Different Banks</h4></div>
            </div>
            

          </div>

        </div>
        
       <Footer/>
    </div>
  )
}
