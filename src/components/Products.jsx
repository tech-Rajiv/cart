import { useContext, useEffect, useState } from "react";
import { productContext } from "../contexts/ProductContextProvider";
import SingleProduct from "./SingleProduct";
import Skeleton from "./Skeleton.jsx";

function products() {
  const { products, setProducts } = useContext(productContext);
  const LIMIT = 9;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showProducts, setShowProducts] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("inpro effect");
    fetch("https://dummyjson.com/products?limit=25")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
      setLoading(true);
    const start = (pageNumber - 1) * LIMIT;
    const end = start + LIMIT;
    const enoughtItems = products.slice(start, end);
    console.log("enoughitems",enoughtItems);
    if (enoughtItems.length <= 0) {
      return;
    }
    setShowProducts(products.slice(start, end));
    console.log('hhhhh');
      setLoading(false);

    /*setTimeout(() => {
      setLoading(false);
    }, 500);*/
  }, [pageNumber, products]);

  useEffect(() => {
    if (!input) {
      setShowProducts(products.slice(0, 9));
      return;
    }
    console.log("typed", input);
    const timeout = setTimeout(() => {
      console.log("prd", products);
      const searched = [...products].filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setShowProducts(searched);
      console.log("done search", searched);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  function sortPrice(str) {
    if (str == "low") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
      return;
    }
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  }
  function sortRating() {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  }

  return (
    <div className="mt-5">
      <div className=" flex justify-between items-center gap-5">
        <div className="search">
          <input
            type="text"
            placeholder="search a product"
            className="outline rounded-lg py-2 px-5 "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="btns flex gap-5">
          <button
            onClick={() => {
              sortPrice("low");
            }}
            className={`py-2 px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
          >
            {" "}
            Low Price
          </button>
          <button
            onClick={() => {
              sortPrice("high");
            }}
            className={`py-2 px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
          >
            {" "}
            High Price
          </button>
          <button
            onClick={sortRating}
            className={`py-2 px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
          >
            {" "}
            high Ratings
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {loading && arr.map((item) => <Skeleton />)}
        {showProducts &&
          showProducts.map((prod) => (
            <SingleProduct key={prod.id} prod={prod} pageNumber={pageNumber} />
          ))}
      </div>
      <div className="btns flex gap-2 mt-10 justify-center">
        <button
          onClick={() => setPageNumber(1)}
          className={`py-2 ${
            pageNumber == 1 ? "outline" : ""
          }  px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
        >
          1
        </button>
        <button
          onClick={() => setPageNumber(2)}
          className={`py-2 ${
            pageNumber == 2 ? "outline" : ""
          }  px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
        >
          2
        </button>
        <button
          onClick={() => setPageNumber(3)}
          className={`py-2 ${
            pageNumber == 3 ? "outline" : ""
          }  px-4 bg-gray-200 rounded-lg cursor-pointer active:bg-gray-100`}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default products;
