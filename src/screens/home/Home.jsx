import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  limit,
} from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";
import CardDress from "../../components/card_dress/CardDress";

function Home() {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);
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
    slidesToShow: 6, // Cambia este valor según tu diseño
    slidesToScroll: 6,
  };

  useEffect(() => {
    // acceder a coleccion
    const db = getFirestore();
    const vehiculosRef = collection(db, "vehiculos");

    const queryFilter = query(collection(db, "vehiculos"), limit(15));

    // obtener los documentos
    getDocs(queryFilter)
      .then((res) => {
        if (res.size === 0) {
          console.log("no hay resultados");
        }
        setVehiculos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
     <>
      <Navbar />

      <div className="home-container">
        <div className="vehiculos-container">
          <h1>Vehiculos</h1>
          <div className="slider-container">
            {loading ? (
              <Loader />
            ) : (
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {vehiculos.map((vehiculo) => (
                  <div key={vehiculo.id}>
                    <Link to={`/detalle/${vehiculo.id}`} className="card-link">
                      <Card
                        marca={vehiculo.marca}
                        imagen={vehiculo.imagen}
                        precio={vehiculo.precio}
                        kilometros={vehiculo.kilometros}
                        ubicacion={vehiculo.ubicacion}
                        condicion={vehiculo.condicion}
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="slider-buttons">
            <button onClick={goToPrev}>Anterior</button>
            <button onClick={goToNext}>Siguiente</button>
          </div>
        </div>
        <div className="moda-conteiner">
          <h1>Moda</h1>
                  <CardDress />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
