import { createContext, useEffect, useState } from 'react';
import { getItems, getGenres } from '../helpers/firebase-queries'; 


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [categorys, setCategorys] = useState([]);
  


  useEffect(() => {
    setCargando(true);
    getItems()
      .then((productsDb) => setProducts([...productsDb]))
      .finally(() => setCargando(false));
    obtenerCategorys();
  }, []);

  const filtrarCategorys = (category) => {
    setCargando(true);
    getItemsByGenre(category)
      .then((productsDb) => setProducts([...productsDb]))
      .finally(() => setCargando(false));
  };

  const obtenerCategorys = () => {
    getGenres().then((categorysDb) => setCategorys([...categorysDb]));
  };

  return (
    <ProductsContext.Provider
      value={{ products, categorys, cargando, filtrarCategorys }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

