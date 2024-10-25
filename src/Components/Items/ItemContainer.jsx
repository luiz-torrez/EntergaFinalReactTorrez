import { ProductsContext } from "../../context/ProductContext";

const itemConteiner = () => {
    const { products, cargando } = useContext(ProductsContext);
  
    return (
      <article className="">
        {cargando ? (
          <Loading />
        ) : (
          products.map((product) => <Song key={product.id} product={product} />)
        )}
      </article>
    );
  };
  export default itemConteiner;