import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import Loading from "../Loading/Loading"
import Item from "./Item";
import "./item.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection,getDocs, query, where } from "firebase/firestore";
import { db } from "../../db/db";
import { useState } from "react";


const ItemConteiner = () => {
    const {cargando } = useContext (ProductsContext);
    const [products, setProducts] = useState([]);
    const category = useParams().category;
    

    useEffect(() => {

      const itemsRef = collection(db, "products");
      const q = category ? query(itemsRef, where("category", "==", category)) : itemsRef;

      getDocs(q)
        .then((responseDb) => {

          setProducts(
            responseDb.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [category])


    return (
      <article className="conteiner">
        {cargando ? (
          <Loading />
        ) : (products &&
          products.map((product) => <Item key={product.id} product={product} />)
        )}
      </article>
    );
  };
  export default ItemConteiner;