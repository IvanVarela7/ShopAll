import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";
import CardDress from "../../components/card_dress/CardDress";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="vehiculos-container">
          <h1>Vehiculos</h1>
          <Card />
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
