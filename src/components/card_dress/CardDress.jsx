import React, { useState } from "react";
import useDress from "../../hooks/useDress";
import Loader from "../loader/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardDress.css";
import { Link } from "react-router-dom";

function CardDress() {
  const { items, loading } = useDress("moda"); // Nombre de la colección en Firebase

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
      <div className="card-dress-container">
        {loading ? (
          <Loader />
        ) : (
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {items.map((item) => (
              <Link to={`/detalle/${item.id}`} className="card-link">
                <div className="card-dress" key={item.id}>
                  <img
                    src={item.imagen}
                    alt={item.marca}
                    className="card-image-dress"
                  />
                  <div className="card-details-dress">
                    <h3 className="card-brand-dress">{item.marca}</h3>
                    <p className="card-price-dress">{`Precio: ${item.precio}`}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        )}
        <div className="slider-buttons">
          <button onClick={goToPrev}>Anterior</button>
          <button onClick={goToNext}>Siguiente</button>
        </div>
      </div>
    </>
  );
}

export default CardDress;
