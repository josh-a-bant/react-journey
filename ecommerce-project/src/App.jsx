import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./components/home/HomePage";
import { Checkout } from "./components/checkout/Checkout";
import { Orders } from "./components/orders/Orders";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} loadCart={loadCart} />}
      />
      <Route path="/orders" element={<Orders cart={cart} />} />
    </Routes>
  );
}

export default App;
