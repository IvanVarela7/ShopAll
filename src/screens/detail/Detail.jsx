import React, { useEffect, useState } from "react";
import "./Detail.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import CardDetail from "../../components/card_detail_vehicle/CardDetail";
import CardDetailDress from "../../components/card_detail_dress/CardDetailDress";

function Detail() {
  const [vehiculo, setVehiculo] = useState({});
  const [dress, setDress] = useState({});
  const [loading, setLoading] = useState(true);
  const { idDetalle } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const vehiculoRef = doc(db, "vehiculos", idDetalle);
        const dressRef = doc(db, "moda", idDetalle);

        const [vehiculoSnapshot, dressSnapshot] = await Promise.all([
          getDoc(vehiculoRef),
          getDoc(dressRef),
        ]);

        if (vehiculoSnapshot.exists) {
          setVehiculo({ id: vehiculoSnapshot.id, ...vehiculoSnapshot.data() });
        }

        if (dressSnapshot.exists) {
          setDress({ id: dressSnapshot.id, ...dressSnapshot.data() });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar el error apropiadamente, como mostrar un mensaje al usuario
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idDetalle]);

  let contentToRender = null;

  switch (idDetalle) {
    case "00Xkh7vS3dadlTTBsN1u":
    case "0MZak0Cx6MgEyHY8wVus":
    case "26igTqz0p9btpopwV1xo":
    case "2LzowGBxUQRzoGHmOZhR":
    case "42vMREXrJbAijpOGHnt6":
    case "4OZOINVnWryfhZJnGuKl":
    case "8bPaEOxoGSpBWAtEgs8I":
    case "AkQ5hMqS8IJrW8f2vAir":
    case "CM2B4OApeGIiMoN363VI":
    case "DnePQuHnyAYyAxKvcQR2":
    case "EJejDdCNZ6EYuPAblUIm":
    case "EghcrlXeUPUWAeJYsFFn":
    case "G94r8JMHjPaS5crr7zSI":
    case "H47Re5OE6ah2mLReaRU8":
    case "JUpyNi2wnp3NT4mxHL4Z":
    case "L1Ec02tNk45v85Lxo2x8":
    case "OoQnBzTOwLhiMMyP6poD":
    case "PDzlrKEDzMrs5rTXCLvm":
    case "TKmvMgC7Cdk2qqZg1OFT":
    case "Vni1DIhBrlQIbXqlU4Z6":
    case "X3fKZYqrte7UfAEK2jmo":
    case "cg3zUhOkdGFyQvKdQ1CC":
    case "ei8YE19AHspv7qS9Zqt6":
    case "fx5deRxyLqdD51RT6f9t":
    case "gOXxm16ZTC1AKkT3R2g3":
    case "gRSp50KuE2xVfYJt4A92":
    case "lWMjOfT9svlAxTZZwpmz":
    case "nOCsL2PxxBjlyOARuITa":
    case "o6nb31ZzH6O85AsDrwA5":
    case "tPy3I9Bt8t1KeDfpdooY":
    case "u1fK5gi8EZ5LuxVHmeTi":
    case "weLTl6sVlVpGuevWJOwu":
    case "xAm5KLh8aZTPN3R11VDN":
    case "yqGjHKt60SzjDAhELBXb":
    case "z4ouVpH2cfsAyXOWQZbu":
      // Mostrar el componente CardDetail para estos idDetalle
      contentToRender = (
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
      );
      break;
    case "2lX1MKJSgRskKDWX6THG":
    case "3Na77BTOVTn0E9J6uhSl":
    case "60Bw5a3syVXZVx2RdK3U":
    case "6W0nm9ArvPyTRvxvK0t4":
    case "CYk4Q9VutNPdW0IRDRzs":
    case "DXV7eE8P7BR6wtqzH8oM":
    case "E2e3DIQThUD3UvfYmxP8":
    case "EGNe7wLPGQoKphqejv7O":
    case "LsOqQyC3FnCagHSmqQm1":
    case "NQ1jW82IF01AsW6Oqiso":
    case "QQFuUq3oazjgct4BB09v":
    case "fcJig2odhXPrXBA0q1vz":
    case "ghzLZiU0EHYjEPGGv4na":
      // Mostrar el componente CardDetailDress para estos idDetalle
      contentToRender = (
        <CardDetailDress
          id={dress.id}
          categoria={dress.categoria}
          imagen={dress.imagen}
          marca={dress.marca}
          precio={dress.precio}
          talle={dress.talle}
          color={dress.color}
          genero={dress.genero}
          descripcion={dress.descripcion}
        />
      );
      break;
    default:
      // Si idDetalle no coincide con ningún caso, mostrar algo por defecto o un mensaje de error
      contentToRender = <p>No se encontraron detalles para este ID.</p>;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="detail-conteiner">
        <div>{loading ? <Loader /> : contentToRender}</div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
