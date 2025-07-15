import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductContextProvider from "./contexts/ProductContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>
);
