import React, { useEffect, useState } from "react";
import "./Detail.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import CardDetail from "../../components/card_detail/CardDetail";

function Detail() {
  const [vehiculo, setVehiculo] = useState({});
  const { idDetalle } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // acceder a un docuemnto

    const db = getFirestore();
    const vehiculoRef = doc(db, "vehiculos", idDetalle);

    getDoc(vehiculoRef)
      .then((res) => {
        if (res.exists) {
          setVehiculo({ id: res.id, ...res.data() });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {loading ? (
          <Loader />
        ) : (
          <CardDetail
            categoria={vehiculo.categoria}
            año={vehiculo.año}
            marca={vehiculo.marca}
            modelo={vehiculo.modelo}
            version={vehiculo.version}
            cilindrada={vehiculo.cilindrada}
            potencia={vehiculo.potencia}
            color={vehiculo.color}
            combustible={vehiculo.combustible}
            descripcion={vehiculo.descripcion}
            kilometros={vehiculo.kilometros}
            condicion={vehiculo.condicion}
            ubicacion={vehiculo.ubicacion}
            imagen={vehiculo.imagen}
            precio={vehiculo.precio}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Detail;
