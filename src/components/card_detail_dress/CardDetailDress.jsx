import React, { useContext, useState } from "react";
import "./CardDetailDress.css";
import { CartContext } from "../../context/CartContext";
import ItemCounter from "../item_counter/ItemCounter";

function CardDetailDress(props) {

  console.log(props.id, 'card detail')

  return (
    <div className="card-detail-dress">
      <img src={props.imagen} alt="Dress" className="card-detail-dress-image" />
      <div className="card-detail-details-dress">
        <h2 className="card-detail-brand-dress">{props.marca} </h2>
        <p className="card-detail-size">Talle: {props.talle} </p>
        <p className="card-detail-color">Color: {props.color} </p>
        <p className="card-detail-genero">Genero: {props.genero} </p>
        <p className="card-detail-description">
          Descripcion: {props.descripcion}
        </p>
        <div className="card-detail-actions">
          <ItemCounter id={props.id} />
        </div>
      </div>
    </div>
  );
}

export default CardDetailDress;
