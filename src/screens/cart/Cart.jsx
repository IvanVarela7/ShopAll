import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import OrderForm from "../../components/order_form/OrderForm";
import CardCart from "../../components/card_cart/CardCart";
import "./Cart.css";


function Cart() {
  const { cart, cartItems, fetchCartItems, emptyCart, removeItem } =
    useContext(CartContext);

  console.log(cartItems);

  useEffect(() => {
    if (cart.length > 0) {
      fetchCartItems();
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="cart-conteiner">
        <div className="cart-productos">
          {cartItems.map((item) => (
            <CardCart
              marca={item.marca}
              descripcion={item.descripcion}
              color={item.color}
              talle={item.talle}
              cantidad={item.cantidad}
              precio={item.precio}
              genero={item.genero}
              imagen={item.imagen}
              remover = {removeItem}
            />
          ))}
        </div>
        <div orders-conteiner>
          <OrderForm />
        </div>
        <button onClick={emptyCart} className="vaciar-carrito-btn">Vaciar carrito</button>

      </div>

      <Footer />
    </>
  );
}

export default Cart;
