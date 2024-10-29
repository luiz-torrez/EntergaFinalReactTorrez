import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import Loading from "../Loading/Loading"
import Item from "./Item";

const ItemConteiner = () => {
    const { products, cargando } = useContext (ProductsContext);
    
  console.log('sin products')
    return (
      <article className="">
        {cargando ? (
          <Loading />
        ) : (products &&
          products.map((product) => <Item key={product.id} product={product} />)
        )}
      </article>
    );
  };
  export default ItemConteiner;