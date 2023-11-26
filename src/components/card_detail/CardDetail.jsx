import React from 'react';
import './CardDetail.css';

function CardDetail(props) {

  return (
    <article className="card-detail">
     <div className="card-detail__image" >
        <img src={props.imagen} alt={`${props.marca} - ${props.modelo}`} />
      </div>
      <div className="card-detail__content">
        <div className="card-detail__header">
          <h2 className="card-detail__title">{props.marca} - {props.modelo}</h2>
          <p><strong>Año:</strong>  {props.año}</p>
          <p> <strong>Versión:</strong> {props.version}</p>
          <p> <strong>Color:</strong>  {props.color}</p>
          <p> <strong>Cilindrada:</strong>  {props.cilindrada}</p>
          <p> <strong>Potencia:</strong>  {props.potencia}</p>
          <p> <strong>Combustible:</strong> {props.combustible}</p>
          <p> <strong>Kilómetros:</strong>{props.kilometros}</p>
          <p> <strong>Condición:</strong> {props.condicion}</p>
          <p> <strong>Precio:</strong> {props.precio}</p>
          <p> <strong>Ubicación:</strong> {props.ubicacion}</p>
        </div>
        <div className="card-detail__description">
          <p><strong>Descripción:</strong> {props.descripcion}</p>
        </div>
        <div className="card-detail__footer">
          <button className="card-detail__add-to-cart-btn">Agregar al carrito</button>
        </div>
      </div>
    </article>
  );
}

export default CardDetail;
