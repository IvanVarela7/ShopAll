import React from 'react'
import "../card_plant/CardPlant.css"


function CardPant() {
	return (
		 <div className="card">
      <img src='' className="card-image" />
      <div className="card-details">
        <h3 className="product-name">name</h3>
        <p className="product-description">description</p>
        <div className="product-colors">
          <span className="color-green">Verde Botánico</span>
          <span className="color-yellow">Amarillo Soleado</span>
        </div>
      </div>
    </div>
	)
}

export default CardPant