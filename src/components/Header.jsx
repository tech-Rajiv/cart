import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { productContext } from '../contexts/ProductContextProvider'

function Header() {
  const {cartItems} = useContext(productContext)
  const navigate = useNavigate()
  return (
    <div className='text-lg flex gap-5 mt-5'>
        <button onClick={()=> navigate("/products")} className='bg-gray-200 py-2 px-5 rounded-lg cursor-pointer active:bg-gray-100'>Products</button>
        <button onClick={()=> navigate("/cart")} className='bg-gray-200 py-2 px-5 rounded-lg cursor-pointer active:bg-gray-100'>Cart({cartItems.length || 0})</button>
    </div>
  )
}

export default Header