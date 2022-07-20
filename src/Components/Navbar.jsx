import React from 'react'
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
      <div className={styles.nav_background}>
              <div className={styles.nav_container}>
                <div className={styles.logo}><img width="120px" height="40px" src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png" alt="logo" /></div>
                 <div className={styles.headings}>
                  <p>Blog</p>
                  <p>Register As A Professional</p>
                  <p>My Bookings</p>
                  <p>Login</p>
                 </div>
                 
              </div>
              <p className={styles.head1}>Home/Hyderabad</p>
              <h1 className={styles.head2}>Home Services, On Demand</h1>

        </div>
    </>
  )
}

export default Navbar
