import React from "react";
import "./Card.css";
import Golf from "../../images/golf-gti-mk7-5.jpg"

function Card(props) {
  return (
    <div className="card">
      <img src={props.imagen} className="card-img-top" />
      <div className="card-body">
        <div className="card-row">
          <h5 className="card-label">{props.marca}</h5>
        </div>
        <div className="card-row">
          <h5 className="card-label">u$S{props.precio}</h5>
        </div>
        <div className="card-row">
          <h5 className="card-label">Kilometros:</h5>
        </div>
        <div className="card-row">
          <h5 className="card-label">Ubicacion:</h5>
        </div>
        <div className="card-row">
          <h5 className="card-label">Condicion:</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
