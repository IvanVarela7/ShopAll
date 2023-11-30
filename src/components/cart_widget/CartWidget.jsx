import React, { useContext, useEffect, useState } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cart, setCart } = useContext(CartContext);

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Obtener los datos del carrito desde el localStorage
    const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Calcular la cantidad total sumando las cantidades de cada elemento
    const quantity = cartData.reduce((total, item) => total + item.cantidad, 0);

    // Establecer la cantidad total en el estado
    setTotalQuantity(quantity);
  }, []);

  return (
    <div className="cart-widget">
      <p className="cart-icon">🛒</p>
      <div className="cart-counter">{totalQuantity}</div>
    </div>
  );
}

export default CartWidget;
