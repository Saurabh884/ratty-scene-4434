import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
     <div className={styles.container}>

        <div className={styles.about}>
            <p>About Us</p>
            <p>UC Impact</p>
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
            <p>Intertest-Based Advertising</p>
            <p>Anti Discrimination Policy</p>
            <p>Blog </p>
            <p>Reviews</p>
            <p>Near Me</p>
            <p>Careers</p>
            <p>Gift Cards</p>
            <p>Contact Us </p>
            <p>Quick Links</p>
            
        </div>
        <hr />
         <div className={styles.countries}>
            <h4>Serving in</h4>

            <h4> IND</h4>
              
               <div className={styles.cname}>
              <p>Agra</p>
              <p>Ahmedabad</p>
              <p>Alwar</p>
              <p>Amritsar</p>
              <p>Aurangabad</p>
              <p>Bangalore</p>
              <p>Bhopal</p>
              <p>Bhubaneshwar</p>
              <p>Chandigarh</p>
              <p>Chennai</p>
              <p>Combatore</p>
              <p>Cuttack</p>
              <p>Dehradun</p>
              <p>Delhi</p>
              <p>Guntur</p>
              <p>Guwahati</p>
              <p>Gwalior</p>
              <p>Hyderabad</p>
              <p>Indore</p>
              <p>Jawalpur</p>
              <p>Jaipur</p>
              <p>Jodhpur</p>
              <p>Jamshedpur</p>
              <p>Kakinada</p>
              <p>Kanpur</p>
              <p>karnal</p>
              <p>Kochi</p>
              <p>Kolkata</p>
              <p>Kota</p>
              <p>Lucknow</p>
              <p>Ludhiana</p>
              <p>Madurai</p>
              <p>Meerut</p>
              <p>Mumbai</p>
              <p>Mysore</p>
              <p>Raipur</p>
              <p>Nashik</p>
              <p>Panipat</p>
              <p>Patna</p>
              <p>Prayagraj</p>
              <p>Pune</p>
              <p>Nagpur</p>
              <p>Rajmundhary</p>
              <p>Ranchi</p>
              <p>Rohtak</p>
              <p>Panipat</p>
              <p>Surat</p>
              <p>Trichy</p>
              <p>Vizag</p>
              <p>Warangal</p>
              </div>
            </div> 

   </div>
   <hr />

        <div className={styles.bottom_footer}>
            <div><img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png" alt="" /></div>
            <div><p>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</p></div>
            <div className={styles.social}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3-sNX6pjIUVrRytl5hiYyzXLHrxLXUF0Og&usqp=CAU" alt="" /></div>
            <div><img src="	https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" alt="" /></div>
            <div> <img src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png" alt="" /></div>

        </div>
    </div>
    </>
  )
}

export default Footer;