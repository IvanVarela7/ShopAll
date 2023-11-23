import React from 'react';
import './CartWidget.css';

function CartWidget() {
  return (
    <div className="cart-widget">
			
      <p className="cart-icon">🛒</p>
      <div className="cart-counter">0</div>
    </div>
  );
}

export default CartWidget;
