import React, { useContext, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './Cart.css'
import { CartContext } from "../../context/CartContext";

function Cart() {
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const {cart} = useContext(CartContext)

  console.log(cart)

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();
    
    const collectionRef = collection(db, "ordenes");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: [],
      totalPrice: 0,
    };

    addDoc(collectionRef, order).then((res) =>
      alert(`La orden a sido enviada con exito, su orden es: ${res.id}`)
    );
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <form onSubmit={handleSubmit} className="order-form">
          <input
            ref={userNameRef}
            type="text"
            placeholder="Ingrese su nombre completo"
            required
            className="form-input"
          />
          <input
            ref={userEmailRef}
            type="email"
            placeholder="Ingrese su email"
            required
            className="form-input"
          />
          <button type="submit" className="submit-button">
            Enviar orden
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
