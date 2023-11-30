import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CartContext } from "../../context/CartContext";
import OrderForm from "../../components/order_form/OrderForm";
import CardCart from "../../components/card_cart/CardCart";
import "./Cart.css";

function Cart() {
  const { cart, cartItems, fetchCartItems, emptyCart, removeItem } = useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      fetchCartItems();
    }
  }, []);

  // Verificar si el localStorage está vacío
  const isLocalStorageEmpty = cartItems.length === 0;

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {isLocalStorageEmpty ? (
          <div className="empty-cart-message">El carrito está vacío</div>
        ) : (
          <>
            <div className="cart-productos">
              {cartItems.map((item) => (
                <CardCart
                  key={item.id} // Asegúrate de tener una key única para cada CardCart
                  marca={item.marca}
                  descripcion={item.descripcion}
                  color={item.color}
                  talle={item.talle}
                  cantidad={item.cantidad}
                  precio={item.precio}
                  genero={item.genero}
                  imagen={item.imagen}
                  remover={removeItem}
                />
              ))}
            </div>
            <div className="orders-container">
              <OrderForm />
            </div>
            <button onClick={emptyCart} className="vaciar-carrito-btn">
              Vaciar carrito
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
