import React, { useContext, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './Cart.css'
import { CartContext } from "../../context/CartContext";
import OrderForm from "../../components/order_form/OrderForm";

function Cart() {
  

  return (
    <>
      <Navbar />
      <OrderForm />
      <Footer />
    </>
  );
}

export default Cart;
