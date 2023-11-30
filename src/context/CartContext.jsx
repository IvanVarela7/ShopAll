import { Children, createContext, useEffect, useState } from "react";

// Crear el Contexto
export const CartContext = createContext();

// Crear el Provider para poder proveer el cotexto a la aplicacion
export function CartProvider({ children }) {
  // recuperamos datos del localStorage

  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const initialItems = storedItems ? storedItems : [];

  // aca va la info del contexto

  const [cart, setCart] = useState(initialItems);

  useEffect(() => {
    const parsedItems = JSON.stringify(cart);
    localStorage.setItem("cartItems", parsedItems);

    console.log(parsedItems, 'parsed items')
  }, [cart]);

  const addItem = (idProducto, cantidad) => {
    setCart([...cart, { id: idProducto, cantidad: cantidad }]);
  };

  

  return (
    <CartContext.Provider value={{ cart, setCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
