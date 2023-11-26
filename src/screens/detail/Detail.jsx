import React, { useEffect, useState } from "react";
import "./Detail.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

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
            <Card
              marca={vehiculo.marca}
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
