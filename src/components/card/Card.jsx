import React, { useState } from "react";
import { Link } from "react-router-dom";
import useVehicles from "../../hooks/useVehicles";
import Loader from "../loader/Loader";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Card.css";

function Card(vehiculo) {
  const { vehiculos, loading } = useVehicles("vehiculos");

  const [slider, setSlider] = useState(null); // Estado para mantener la referencia al slider

  const goToNext = () => {
    slider && slider.slickNext(); // Método para ir al siguiente slide
  };

  const goToPrev = () => {
    slider && slider.slickPrev(); // Método para ir al slide anterior
  };

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <div className="card-vehicles-container"> 
        {loading ? (
          <Loader />
        ) : (
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {vehiculos.map((vehiculo) => (
              <div key={vehiculo.id} className="card-vehicles-link"> 
                <Link to={`/detalle/${vehiculo.id}`}>
                  <img src={vehiculo.imagen} className="card-vehicles-img-top" /> 
                  <div className="card-vehicles-body"> 
                    <div className="card-vehicles-row-marca"> 
                      <h5 className="card-vehicles-label-marca">{vehiculo.marca}</h5> 
                    </div>
                    <div className="card-vehicles-row-precio"> 
                      <h5 className="card-vehicles-label-precio">
                        u$S {vehiculo.precio}
                      </h5>
                    </div>
                    <div className="card-vehicles-row-kilometros"> 
                      <h5 className="card-vehicles-label-kilometros">
                        {vehiculo.kilometros}
                      </h5>
                    </div>
                    <div className="card-vehicles-row-ubicacion"> 
                      <h5 className="card-vehicles-label-ubicacion">
                        {vehiculo.ubicacion}
                      </h5>
                    </div>
                    <div className="card-vehicles-row-condicion"> 
                      <h5 className="card-vehicles-label-condicion">
                        {vehiculo.condicion}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="slider-buttons"> {/* Cambio de nombre de la clase */}
        <button onClick={goToPrev}>Anterior</button>
        <button onClick={goToNext}>Siguiente</button>
      </div>
    </>
  );
}

export default Card;

