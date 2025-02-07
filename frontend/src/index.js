import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/searh";
import { ToastContainer } from "react-toastify";
import "antd/dist/reset.css";
import { CartProvider } from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
