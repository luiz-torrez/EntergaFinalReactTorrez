import { createContext, useEffect, useState } from 'react';
import { getSongs, getGenres } from '../helpers/firebase-queries'; 


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [categorys, setCategorys] = useState([]);
  


  useEffect(() => {
    setCargando(true);
    getSongs()
      .then((productsDb) => setProducts([...productsDb]))
      .finally(() => setCargando(false));
    obtenerCategorys();
  }, []);

  const filtrarCategorys = (category) => {
    setCargando(true);
    getSongsByGenre(category)
      .then((productsDb) => setProducts([...productsDb]))
      .finally(() => setCargando(false));
  };

  const obtenerCategorys = () => {
    getGenres().then((categorysDb) => setCategorys([...categorysDb]));
  };
  // useEffect(() => {

  //   const productosRef = collection(db, "products");
  //   const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

  //   getDocs(q)
  //     .then((resp) => {

  //       setProducts(
  //         resp.docs.map((doc) => {
  //           return { ...doc.data(), id: doc.id }
  //         })
  //       )
  //     })
      
  // }, [category])



  return (
    <ProductsContext.Provider
      value={{ products, categorys, cargando, filtrarCategorys }}
    >
      {children}
    </ProductsContext.Provider>
  );
};


































// //lo que tenemos que consumir
// export const ProductsContext = createContext();

// //el que provee acceso al contexto
// export function ProductsProvider({ children }) {

//   const [products, setProducts] = useState([]);
//   const [cargando, setCargando] = useState(false);
//   const [categorys, setCategorys] = useState([]);


//   useEffect(() => {
//     setCargando(true);
//     getItems()
//       .then((productsDb) => setProducts([...productsDb]))
//       .finally(() => setCargando(false));
//     obtenerCategorys();
//   }, []);

//   const filtrarCategorys = (category) => {
//     setCargando(true);
//     getSongsByGenre(category)
//       .then((productsDb) => console.table([...productsDb]))
//       .finally(() => setCargando(false));
//   };

//   const obtenerCategorys = () => {
//     getCategoryes().then((categorysDb) => setCategorys([...categorysDb]));
//   };





//   return (
//     <ProductsContext.Provider value={[products, cargando, categorys, filtrarCategorys ]}>
//       {children}
//     </ProductsContext.Provider>
//   );
// }
