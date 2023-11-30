import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

  const {cart, setCart} = useContext(CartContext)

  // <div className="cart-counter">{cart}</div>
  return (
    <div className="cart-widget">
			
      
      <p className="cart-icon">🛒</p>
      

      

    </div>
  );
}

export default CartWidget;
