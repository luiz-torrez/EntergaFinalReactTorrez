import {createContext, useEffect, useState} from 'react';
import { filterProductsByCategory, getProducts, getProductsByCategory } from '../firebase/firebase';

export const ProductsContext = createContext(false);

export function ProductsProvider ({children}){
    const [category, setCategory]= useState([]);
    const [products, setProducts]= useState([]);
    const [cargando, setCargando]= useState([]);
    



    useEffect(() => {
        setCargando(true);
        getProducts()
          .then((categoryDb) => setCategory([...categoryDb]))
          .finally(() => setCargando(false));
        obtenerCategory();
      }, []);
      
    
      const filtrarCategory = (category) => {
        setCargando(true);
        getProductsByCategory(category)
          .then((categoryDb) => setCategory([...categoryDb]))
          .finally(() => setCargando(false));
      };
      const obtenerCategory = () => {
        filterProductsByCategory().then((categoryDb) => setCategory([...categoryDb]));
      };

    // useEffect(()=>{
    //     getProducts().then((product)=> setProducts(product));

    // },[]);

    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {children}
        </ProductsContext.Provider>
    );
}
