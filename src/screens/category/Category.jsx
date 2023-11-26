import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./Category.css";

function Category() {
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true);
  const [vehiculos, setVehiculos] = useState({});

  useEffect(() => {
    // acceder a coleccion
    const db = getFirestore();
    const queryFilter = query(
      collection(db, "vehiculos"),
      where("categoria", "==", idCategoria)
    );

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
  }, [idCategoria]);

  return (
    <>
      <Navbar />
      <div className="contenedor-categoria">
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

export default Category;
