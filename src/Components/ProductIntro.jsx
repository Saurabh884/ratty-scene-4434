import React from 'react'
import Product from './Product'
import styles from "./ProductIntro.module.css"

import {data} from "../data"
import Footer from './Footer'

console.log(data)

const ProductIntro = () => {
  return (
    <>
        <div className={styles.intro}>
           <div className={styles.left}>
             <h1>Hair Studio For Women</h1>
             <p> ★ 4.78 (26K)</p>
             <div className={styles.heart}>
              <div><img src="data:image/jpeg;base64,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" alt="" /></div>  
                <div>Hair Guide </div>
             </div>
               
           </div>
           <div className={styles.right}>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639395225821-fa9785.png" alt="" />
           </div>
        </div>
        <hr />
        <div className={styles.photos}>
            <div>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1642064596966-f8dd45.jpeg" alt="" />
               <p>Cut & Style</p>
             </div>
            <div>
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657705449978-7b18e4.jpeg" alt="" />
                <p>Blowdry & Styling</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657705443417-42e7e2.jpeg" alt="" />
                <p>Monthly Colour</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639393448778-bf6ea8.jpeg" alt="" />
                <p>Spa & Massage</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1639395225821-fa9785.png" alt="" />
                <p>Fashion Colour</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1637322457137-c81f92.png" alt="" />
                <p>Anti Frizz Keratin</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657705436388-da125b.jpeg" alt="" />
                <p>Party Essentials</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657705429376-0ee04d.jpeg" alt="" />
                <p>Hair Care Essentials</p>
            </div>
            <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657705423248-85b8d5.jpeg" alt="" />
                <p>Regular Trim</p>
            </div>
        </div>
        <hr />
        <div className={styles.desc}>
        <div className={styles.left_div}>

            {data.map((elem)=>{
                return <Product elem={elem}/>
            })}
           
        </div>
             
             <div className={styles.right_div}>
                <div>
                    <h3>Save 15% on every order</h3>
                    <p>Get Plus now</p>

                </div>
                <div>
                    <h3>CRED play</h3>
                    <p>Upto 100 cashback</p>

                </div>
                <div>
                    <h3>Upto 200 cashback</h3>
                    <p>On amazon play</p>

                </div>
                <div>
                    <h3>20% Cashback on Paytm</h3>
                    <p>Upto 400 Off</p>

                </div>
                <div>
                    <h3>5% simple cashback upto 750 </h3>
                    <p>Pay Via simpl</p>

                </div>
                <div>
                    <h3>Assured Cashback </h3>
                    <p>Upto 500 Off</p>

                </div>

                <div className={styles.total}>
                      <p>Total</p>
                      <button className={styles.totalBtn}>View Cart</button>
                 </div>

             </div>

            
        
        </div>
       
          <Footer/>
    </>
    
  )
}

export default ProductIntro