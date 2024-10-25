import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../helpers/firebase-queries'; 

//lo que tenemos que consumir
export const ProductsContext = createContext(false);

//el que provee acceso al contexto
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
}
