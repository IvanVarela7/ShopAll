import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

  const {cart, setCart} = useContext(CartContext)

  return (
    <div className="cart-widget">
			
      <p className="cart-icon">🛒</p>
      <div className="cart-counter">{cart}</div>
    </div>
  );
}

export default CartWidget;
