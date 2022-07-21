import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from "./LandingDetails.module.css"



const LandingDetails = () => {
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

              <div className={styles.searchBar}>
             
                <input type="image" className={styles.i1} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB6CAMAAAD+v/PbAAAA7VBMVEX/mTMSiAf///8AhAD/lSZ0qWb/uX0AhgD/lyz/rmVVm0EAAIHLy8uMjIyjo6MAAHjX19ft7e1xcXG+vr7i4uIAAHEAAIb29vapqalsbGyAgICsrM0AADcAAErx8fcAAABYWKJeXl4AAGSXl5fg4O68vNhISEihocWgoKY3N252drB4eIk8PJqAgLVCQo8pKYxycrNpaXgvLy7/iwD/2Lv/9/D/o09kZKmamsQ5OV6Skp08PHoHB14/P5YoKCBGRnQ0jyS81LkAegCBsXn/4cr/y6L/w5QeHnpOTqIdHWoeHoWGhrNanlOlxZ3U3snyBOEUAAADkUlEQVR4nO2a4VPTMBTA49vYgDRtupamHRrBrEPH5qqAmygiG6KC8v//OabrFMf5Ae6SW3q+3117Wz8sv3v3kry8jkDJyeWX1pbLtL5cLkSBlLfjrWazueky2m/r8rfv1dEmcZ/No6vK96q5bpUH0rwqfY+P1u3xYI6OgZy8q0MyVGy+OyE1Cm8ZYNKqS/aWNFukRulQJsS6DRAEQRAEQRAEQRAEQRAE+Y9p1gvSqhcE6gX62sWOr+z1etLKL5v37e1OaFBCJ7s9479u2lcWY0qDp1+/fX0aUDouTEfZsO+U0mfvc+mHIlQyf/+M0qnZAYz6yoLSURRBDOCBvkfRiFKzITbpK4fJ81MQC9l0cRdw+jwZmhQ26Cv36NDTQQWIQlAQlh8g9oZ0z6CwQd/RzgcZAnAPIg5d4BF4HCCUH3ZG5gYx55snH/d1OAFYyBVkoHjItH0M+x+T3Ngo5nzP6EGZujqqCva17z4oHekyiQ/ombFRjPnmwWvBdTqkPnR4x8s8fQdfT7uQi9eBsQAb89178UmIKBXgq7jvs4z5/Vj5INJIiE8v9kwNY8q3N0705IK4kwrW7aYs01eXibQTl0+Tsamd2ZRvTovQK938fspYJ2JRh7G07+snsRcW1FRCmPI9CN4I4Iz5nGdd9fL8+/lL1c049xnjIN4EB4bGMeV7E7zVqwMIj/V1KrwKkuBV2s36yls8fRvcGBrHlO+A5mHMvSiK0lQd7iRJsnOo0lR/93gc5nRgaJz/1fdPPqh/5IMcU9fy4f58u16ZbxPn5tv99exmZT0bOLeere4XfrfQ15/9gru3Xyz3Y1+A0vuxOi1Old6PlbP78d/1TqbrnYGud7JlvSNdrHd0PTnVa0GUgsd0LTnRF/Mg1YcMfQgdClOj2KrXJ8t63XO2Xl89D42cPw+tnjen7p83QZ7dneend+f5M0fP81W/pKj6JXnVLylc7pfAsh+1G6tQhiredb0fpZGDRb/v+tv1ot83cLzfB4t+alBRh35qhZQ9WZd+tV3Q1y5ko16QRr0gT+oF+toFfe2CvnZBX7ugr13Q1y7oaxf0tQv62gV97YK+dkFfu6CvXdDXLqS9boNH0Saf6yTc/kzmjXVLPILGnFzM1i3xCGYXRGzXJyHa24JAjQI8uyjfD9Umgxvz6n3WfFaHlGjP5rB8/3b7o9Fou02j8eMWfvuCuPi5se0yGz9vq78s/QLiG8bhixNIVQAAAABJRU5ErkJggg==" alt="Submit"/>
                 
                <input type="text" className={styles.i2} placeholder='Search for Services'/>
              </div>
              <p className={styles.msg}>Message for Men, Home Paintings, Elecricians etc</p>

        </div>

        <div className={styles.home_icons}>
             <div className={styles.f_row}>
              <div> <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="" /> 
              <p>Salon For Women</p>
              
              </div>
              <NavLink to="/hairservices">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="" />
                <p>Hair Services For Women</p>
              </NavLink>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" alt="" />
                <p>Spa for Women</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="" />
                <p>Salon for Men</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="" />
                <p>AC/Appliance Repair</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" alt="" />
                <p>Massage for Men</p>
              </div>
             </div>
             <div className={styles.s_row}>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="" />
                <p>Home Painting</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="" />
                <p>Cleaning & Pest Control</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg" alt="" />
                <p>Electricians</p>
              </div>
              <div>
              <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="" />
                <p>Plumbers & Carpenters</p>
              </div>
             </div>
        </div>
        <h1>Home Repairs</h1>

        <div className={styles.repairs}>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" alt="" />
            <p>Carpenters</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" alt="" />
            <p>Electricians</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" alt="" />
            <p>Plumbers</p></div>
        </div>


    </>
  )
}

export default LandingDetails;
