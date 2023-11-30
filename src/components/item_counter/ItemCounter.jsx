import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './ItemCounter.css';

function ItemCounter({ id }) {
  const { addItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [showCounter, setShowCounter] = useState(true);
  const [showAddButton, setShowAddButton] = useState(true);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(id, quantity);
    setShowAddButton(false); // Oculta el botón "Agregar al carrito"
    setShowCounter(false); // Oculta el contador de productos
  };

  return (
    <>
      {showCounter && ( // Condición para mostrar el contador
        <div className="quantity-selector">
          <button className="quantity-modifier" onClick={handleDecrement}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-modifier" onClick={handleIncrement}>
            +
          </button>
        </div>
      )}
      {showAddButton ? (
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      ) : (
        <>
          <Link to={'/'}>
            <button className="continue-shopping-button" >
              Seguir comprando
            </button>
          </Link>
          <Link to={'/Cart'}>
            <button className="go-to-cart-button">
              Ir al carrito
            </button>
          </Link>
        </>
      )}
    </>
  );
}

export default ItemCounter;

