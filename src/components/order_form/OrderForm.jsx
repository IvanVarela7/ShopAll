import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useRef } from 'react'
import { CartContext } from '../../context/CartContext';
import './OrderForm.css'

function OrderForm() {

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
		<div className="order-form-container">
        <form onSubmit={handleSubmit} className="order-form-order-form">
          <input
            ref={userNameRef}
            type="text"
            placeholder="Ingrese su nombre completo"
            required
            className="order-form-form-input"
          />
          <input
            ref={userEmailRef}
            type="email"
            placeholder="Ingrese su email"
            required
            className="order-form-form-input"
          />
          <button type="submit" className="order-form-submit-button">
            Enviar orden
          </button>
        </form>
      </div>
	)
}

export default OrderForm