import { createContext, useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const initialItems = storedItems ? storedItems : [];

  const [cart, setCart] = useState(initialItems);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const parsedItems = JSON.stringify(cart);
    localStorage.setItem("cartItems", parsedItems);
  }, [cart]);

  const isInCart = (idProducto) =>
    cart.some((item) => item.id === idProducto);

  const addItem = (idProducto, cantidad) => {
    if (isInCart(idProducto)) {
      setCart(
        cart.map((item) =>
          item.id === idProducto
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { id: idProducto, cantidad: cantidad }]);
    }
  };

  const fetchCartItems = async () => {
    const db = getFirestore();

    try {
      const promises = cart.map(async (item) => {
        const itemRef = doc(db, "moda", item.id);
        const res = await getDoc(itemRef);

        if (res.exists()) {
          return { id: res.id, cantidad: item.cantidad, ...res.data() };
        }
      });

      const itemsData = await Promise.all(promises);
      setCartItems(itemsData);
    } catch (error) {
      console.error(error);
    }
  };

  const precioTotal =
    cartItems.length > 0
      ? cartItems.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
      : 0;

  const emptyCart = () => {
    setCart([]);
    setCartItems([]);
  };

  const removeItem = (idProducto) =>{
      const filteredCart = cart.filter(item => item.id === idProducto)
      setCart(filteredCart)

      const filteredCartItem = cartItems.filter(item => item.id === idProducto)
      setCartItems(filteredCartItem)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        fetchCartItems,
        cartItems,
        setCartItems,
        precioTotal,
        emptyCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
