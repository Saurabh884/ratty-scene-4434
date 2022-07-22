import React from 'react'
import styles from "./Product.module.css"
const Product = ({elem,cart}) => {
  
  const handleAddCart = ()=>{
    if(cart.length>0)
    {
      cart.find((item)=>item.id!==elem.id && cart.push(elem))   
      localStorage.setItem("cartData",JSON.stringify(cart))
    }
    else {
      cart.push(elem)
      localStorage.setItem("cartData",JSON.stringify(cart))

    }
    


  }
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
                     <button onClick={handleAddCart}>Add</button>
                </div>
                <div>
                <hr />
                </div>
                
    </div>
                
                
        
  )
}

export default Product
