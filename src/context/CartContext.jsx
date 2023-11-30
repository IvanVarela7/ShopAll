import { Children, createContext, useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Crear el Contexto
export const CartContext = createContext();

// Crear el Provider para poder proveer el cotexto a la aplicacion
export function CartProvider({ children }) {
  // recuperamos datos del localStorage

  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const initialItems = storedItems ? storedItems : [];

  // aca va la info del contexto

  const [cart, setCart] = useState(initialItems);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const parsedItems = JSON.stringify(cart);
    localStorage.setItem("cartItems", parsedItems);
  }, [cart]);

  const isInCart = (idProducto) =>
    cart.find((item) => (item.id === idProducto ? true : false));

  const addItem = (idProducto, cantidad) => {
    if (isInCart(idProducto)) {
      setCart(
        cart.map((item) => {
          item.id === idProducto
            ? { id: idProducto, cantidad: item.cantidad + cantidad }
            : item;
        })
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
          const getQuantity = cart.find((item) => item.id === res.id);

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
    setCartItems([])
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
