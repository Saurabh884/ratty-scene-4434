import React from 'react'
import styles from "./Product.module.css"
const Product = ({elem}) => {
  return (
    <div style={{display:"flex"}}>
        <div>
                <h1>{elem.head1}</h1>
                <h3>{elem.head2}</h3>
                <div className={styles.price}>
                    <div className={styles.price1}>₹ {elem.price} </div>
                    <div>{elem.time}</div>
                </div>
                <p className={styles.desc1}>{elem.desc1}</p>
                <p className={styles.desc1}>{elem.desc2}</p>

        </div>
                <div className={styles.imgBtn}>
                     <img src={elem.images} alt="" />
                     <button>Add</button>
                </div>
                <div>
                <hr />
                </div>
                
    </div>
                
                
        
  )
}

export default Product
