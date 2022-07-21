import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div>
     < div className={styles.nav_container}>
                <div className={styles.logo}><img width="120px" height="40px" src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png" alt="logo" /></div>
                 <div className={styles.headings}>
                  <p>Blog</p>
                  <p>Register As A Professional</p>
                  <p>My Bookings</p>
                  <p>Login</p>
                 </div>
                 
              </div>
              <hr />
    </div>
  )
}

export default Navbar