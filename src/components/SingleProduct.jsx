import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContextProvider";

function SingleProduct({ prod, pageNumber }) {
  const [addedProducts, setAddedProducts] = useState(false);
  const [haveInBag, setHaveInBag] = useState(0);
  const { cartItems, setCartItems } = useContext(productContext);
  function addToCart(e, product) {
    const exists = cartItems.find((item) => item.title === product.title);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.title == product.title) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: Number((item.totalPrice + item.price).toFixed(2)),
            };
          }
          return item;
        })
      );
      return;
    }
    const item = {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      quantity: 1,
      price: product.price,
      totalPrice: product.price,
    };
    setCartItems([...cartItems, item]);
  }
  useEffect(() => {
   //console.log(prod);
    const exists = cartItems.find((item) => item.title == prod.title);
    if (exists) {
      setHaveInBag(exists.quantity);
      setAddedProducts(true);
    }
  }, [cartItems]);
  return (
    <div className="singleProduct outline flex flex-col justify-between items-center p-2 rounded-xl">
      <div className="imageWrapper">
        <img src={prod.thumbnail} alt="" width={"200px"} />
      </div>
      <div className="title text-lg ">{prod.title}</div>
      <div className="priceWithStar flex  w-full px-3 items-center mt-1">
        <div className="text-lg font-semibold  w-full">$ {prod.price}</div>
        <div className="stars flex items-center gap-2">
          <div className="star ">{prod.rating}</div>
          stars
        </div>
      </div>
      {addedProducts ? (
        <button
          onClick={(e) => addToCart(e, prod)}
          className="bg-black text-white text-center py-2 w-full rounded-xl mt-2 cursor-pointer active:bg-gray-600"
        >
          added({haveInBag})
        </button>
      ) : (
        <button
          onClick={(e) => addToCart(e, prod)}
          className="bg-black text-white py-2 w-full rounded-xl mt-2 cursor-pointer active:bg-gray-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
