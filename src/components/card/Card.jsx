import React from "react";
import "./Card.css";
import Golf from "../../images/golf-gti-mk7-5.jpg"

function Card() {
  return (
    <div className="card">
      <img src={Golf} className="card-img-top" />
      <div className="card-body">
        <div className="card-row">
          <h5 className="card-label">Marca:</h5>
        </div>
        <div className="card-row">
          <h5 className="card-label">Precio:</h5>
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
