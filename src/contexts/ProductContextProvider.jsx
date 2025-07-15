import  { createContext, useEffect, useState } from "react";

export const productContext = createContext()
function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems ,setCartItems] = useState([])

  useEffect(() => {
    
  }, []);
  return <productContext.Provider value={{products,setProducts ,cartItems , setCartItems}}>{children}</productContext.Provider>;
}

export default ProductContextProvider;
