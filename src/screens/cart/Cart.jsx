import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './Cart.css'
import { CartContext } from "../../context/CartContext";
import OrderForm from "../../components/order_form/OrderForm";

function Cart() {
  const {cart, cartItems, fetchCartItems} = useContext(CartContext) 

  console.log(cartItems)

  useEffect(() => {
    if(cart.length > 0){
      fetchCartItems()
    }

  },[])

  return (
    <>
      <Navbar />
      <OrderForm />
      <Footer />
    </>
  );
}

export default Cart;
