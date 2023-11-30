import React from "react";
import './CardVehicles.css'


function CardVehicles(props) {
  return (
    <div key={props.id} className="card-category-link">
			 <div className="card-img-container">

				 <img src={props.imagen} className="card-img-top" />
			 </div>
     

      <div className="card-category-body">
        <div className="card-category-row-marca">
          <h5 className="card-label-marca">{props.marca}</h5>
        </div>
        <div className="card-category-row-precio">
          <h5 className="card-label-precio">u$S {props.precio}</h5>
        </div>
        <div className="card-category-row-kilometros">
          <h5 className="card-label-kilometros">{props.kilometros}</h5>
        </div>
        <div className="card-category-row-ubicacion">
          <h5 className="card-label-ubicacion">{props.ubicacion}</h5>
        </div>
        <div className="card-category-row-condicion">
          <h5 className="card-label-condicion">{props.condicion}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardVehicles;
