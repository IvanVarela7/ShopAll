import React, { useContext, useState } from 'react';
import './CardDetailDress.css';
import { CartContext } from '../../context/CartContext';

function CardDetailDress(props) {

  const {articulos, setArticulos} = useContext(CartContext)

   const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    setArticulos(prevArticulos => prevArticulos + quantity);
  };

  return (
    <div className="card-detail-dress">
      <img src={props.imagen} alt="Dress" className="card-detail-dress-image" />
      <div className="card-detail-details-dress">
        <h2 className="card-detail-brand-dress">{props.marca} </h2>
        <p className="card-detail-size">Talle: {props.talle} </p>
        <p className="card-detail-color">Color: {props.color} </p>
        <p className="card-detail-genero">Genero: {props.genero} </p>
        <p className="card-detail-description">Descripcion: {props.descripcion}</p>
        <div className="card-detail-actions">
          <div className="quantity-selector">
            <button className="quantity-modifier" onClick={handleDecrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-modifier" onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default CardDetailDress;
