import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imagen} className="card-img-top" />
      <div className="card-body">
        <div className="card-row-marca">
          <h5 className="card-label-marca">{props.marca}</h5>
        </div>
        <div className="card-row-precio">
          <h5 className="card-label-precio">u$S {props.precio}</h5>
        </div>
        <div className="card-row-kilometros">
          <h5 className="card-label-kilometros">{props.kilometros}</h5>
        </div>
        <div className="card-row-ubicacion">
          <h5 className="card-label-ubicacion">{props.ubicacion}</h5>
        </div>
        <div className="card-row-condicion">
          <h5 className="card-label-condicion">{props.condicion}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
