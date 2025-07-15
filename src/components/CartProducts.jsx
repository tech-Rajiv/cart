import { useContext } from "react";
import { productContext } from "../contexts/ProductContextProvider";

function CartProducts({ prod }) {
  const {setCartItems} = useContext(productContext)
  console.log(prod);
  function deleteItem(product) {
    setCartItems(prev => prev.filter(item => item.title !== product.title))
  }
  return (<div className="singleProduct outline gap-5 rounded-xl mb-2">
    <div className="heading w-full flex justify-between gap-5 items-center px-10">
      <div className="image  h-20 p-2 overflow-hidden"><img src={prod.thumbnail} alt="" className="w-full h-full object-cover"/></div>
      <div className="name">{prod.title}</div>
      <div className="quantity">Quantity({prod.quantity})</div>
      <div className="quantity">perUnit ({prod.price})</div>
      <div className="quantity">Total ({prod.totalPrice})</div>
      <button onClick={()=>deleteItem(prod)} className="bg-red-400 text-white  py-2 px-5 rounded-lg cursor-pointer">delete</button>
    </div>

  </div>)
}

export default CartProducts;
