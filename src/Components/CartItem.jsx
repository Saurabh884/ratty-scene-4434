import React, { useEffect, useState } from 'react'

export const CartItem = ({elem,cart}) => {
    console.log(cart)
    
  const [quantity, setQuantity] = useState(0);

  const [currentElement]=useState(()=>{
    return cart.find((item)=>item.id===elem.id && setQuantity(item.qty))
  })

  
  const deleteItem = (index) => {
    cart.splice(index, 1)
    localStorage.setItem('cartData', JSON.stringify(cart));

  }

  useEffect(() => {
    if (quantity === 0) {
      cart.find((item, index) => item.id === elem.id && deleteItem(index))
    }
  }, [quantity, deleteItem])


  const increment = () => {
    cart.find((item) => item.id === elem.id && item.qty++ && setQuantity(item.qty))
    localStorage.setItem('cartData', JSON.stringify(cart));
  }

  const decrement = () => {

    cart.find((item, index) => item.id === elem.id && item.qty > 0 && item.qty-- && setQuantity(item.qty))
    localStorage.setItem('cartData', JSON.stringify(cart));
  }
  
  return (
    <>
    {quantity>0 && <div style={{display:"flex", justifyContent:"space-between"}}>

<div style={{marginBottom:"50px"}}>{elem.head1}</div>
<div style={{display:"flex", justifyContent:"right"}}><div style={{justifyContent:"center",textAlign:"center",fontSize:"25px",cursor:"pointer", backgroundColor:"rgb(0,142,204)", height:"40px", width:"40px", color:"white", borderRadius:"10%"}} onClick={decrement}>-</div><div style={{height:"30px", width:"35px",fontSize:"20px"}}>{quantity}</div>
<div style={{justifyContent:"center",textAlign:"center",fontSize:"25px",cursor:"pointer", backgroundColor:"rgb(0,142,204)", height:"40px", width:"40px", color:"white", borderRadius:"10%"}} onClick={increment}>+</div></div>
<div>
    {elem.price*elem.qty}
</div>
</div>

}
    
    </>
  )
}
