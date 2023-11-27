import { Children, createContext, useState } from "react";

// Crear el Contexto
export const CartContext = createContext();


// Crear el Provider para poder proveer el cotexto a la aplicacion
export function CartProvider({children}) {
  // info del contexto

  const [articulos, setArticulos] = useState(0)

  return(
    <CartContext.Provider value={{articulos, setArticulos}}>
        {children}

    </CartContext.Provider>
  )
}
