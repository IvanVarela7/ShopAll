import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCounter({ id }) {
  const { addItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  console.log(id, 'item counter')

  return (
    <>
      <div className="quantity-selector">
        <button className="quantity-modifier" onClick={handleDecrement}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-modifier" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => addItem(id, quantity)}
      >
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCounter;
