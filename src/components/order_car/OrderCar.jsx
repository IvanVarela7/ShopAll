import React, { useState } from "react";
import "./OrderCar.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function OrderCar() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validación simple de campos
    if (!userName || !userEmail || !userQuestion) {
      setErrorMessage("Por favor, complete todos los campos.");
      return;
    }

    const db = getFirestore();
    const collectionRef = collection(db, "preguntas");

    const question = {
      userName: userName,
      userEmail: userEmail,
      question: userQuestion,
    };

    try {
      const docRef = await addDoc(collectionRef, question);
      setSuccessMessage(`La pregunta ha sido enviada con éxito. ID de pregunta: ${docRef.id}`);
      // Limpiar los campos después de enviar la pregunta
      setUserName("");
      setUserEmail("");
      setUserQuestion("");
    } catch (error) {
      setErrorMessage("Error al enviar la pregunta. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="order-cart-container">
      <form onSubmit={handleFormSubmit} className="order-cart-form">
        <p>Preguntar por el vehículo</p>
        <input
          type="text"
          placeholder="Ingrese su nombre completo"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="order-cart-form-input"
        />
        <input
          type="email"
          placeholder="Ingrese su email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          className="order-cart-form-input"
        />
        <textarea
          placeholder="Escriba su pregunta aquí"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          required
          className="order-cart-form-textarea"
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="order-cart-submit-button">
          Preguntar
        </button>
      </form>
    </div>
  );
}

export default OrderCar;
