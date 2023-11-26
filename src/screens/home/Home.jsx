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
} from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // acceder a coleccion
    const db = getFirestore();
    const vehiculosRef = collection(db, "vehiculos");

    // obtener los documentos
    getDocs(vehiculosRef)
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
      <div>
        {loading ? (
          <Loader />
        ) : (
          vehiculos.map((vehiculo) => (
            <Link to={`/detalle/${vehiculo.id}`}>
              <Card
                marca={vehiculo.marca}
                imagen={vehiculo.imagen}
                precio={vehiculo.precio}
              />
            </Link>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;
