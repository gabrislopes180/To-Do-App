import { createContext, useContext, useState, type ReactNode } from "react";

type Product = {
  id: number;
  img: string;
  prodName: string;
  Category: string;
  disponibility: string;
  price: number;
};

// Tipo do valor do contexto
type ArrayContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

// Criação do contexto com valor padrão
const CartContext = createContext<ArrayContextType | undefined>(undefined);

// Provedor que envolve sua aplicação
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    console.log("adicionou");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
};
