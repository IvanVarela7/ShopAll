import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

  const {articulos, setArticulos} = useContext(CartContext)
  return (
    <div className="cart-widget">
			
      <p className="cart-icon">🛒</p>
      <div className="cart-counter">{articulos}</div>
    </div>
  );
}

export default CartWidget;
