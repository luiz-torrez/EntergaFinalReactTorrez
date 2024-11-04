import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const Item = ({ product }) => {







  return (
    <article className='card'>
          <h4>{product.nombre}</h4>
          <img src={product.img} alt={product.nombre} />
          <div className='contenido'>
            <p>Categoria {product.category}</p>
            <p>Precio ${product.precio}</p>
            <button><Link to= {`/Detail/${product.id}`}>Detalle</Link></button>
            {/* <button onClick={handleClick}>Comprar</button>  	 */}
          </div>
          
        </article>
  );
};
export default Item;