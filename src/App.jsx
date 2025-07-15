import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"


function App() {
 
  return (
    <div className="max-w-5xl mx-auto py-5 bg-white px-10">
      <h2 className="text-xl font-semibold underline text-center">SHOP</h2>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App