import React, { useEffect, useState } from "react";
import "./CardDress.css";
import Loader from "../loader/Loader";
import useDress from "../../hooks/useDress";

function CardDress() {
  const { items, loading } = useDress("moda"); // Nombre de la colección en Firebase

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list">
          {items.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.imagen} alt={item.marca} className="card-image" />
              <div className="card-details">
                <h3 className="card-brand">{item.marca}</h3>
                <p className="card-price">{`Precio: ${item.precio}`}</p>
                {/* Agregar más detalles si es necesario */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardDress;
