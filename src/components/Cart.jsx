import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../contexts/ProductContextProvider'
import CartProducts from './cartProducts'

function Cart() {
  const {cartItems} = useContext(productContext)
  const [total ,setTotal] = useState() 
  useEffect(()=>{
    setTotal(cartItems.reduce((a,b)=> a + b.totalPrice,0).toFixed(2))
  })

  return (
    <div className='mt-5'>
      <div className="checkoutComp mt-2 mb-4 text-center">
        <div className="total font-semibold">Total Amount: {total}</div>
       
      </div>
    
      <div className="">
      {
        cartItems && cartItems.map(prod => <CartProducts prod={prod}/>)
      }
      </div>
      <div className="checkoutComp mt-5">  
        <button className='bg-black text-white px-10 py-2 rounded-lg cursor-pointer'>CheckOut </button>
      </div>
    </div>
  )
}

export default Cart