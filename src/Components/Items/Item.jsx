import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import ItemCount from "../../pages/ItemCount";


const Item = ({ product }) => {


  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1)
  }







  return (
    <article className='card'>
      <h4>{product.nombre}</h4>
      <img src={product.img} alt={product.nombre} />
      <div className='contenido'>
        <p>Categoria {product.category}</p>
        <p>Precio ${product.precio}</p>
        <button><Link to={`/Detail/${product.id}`}>Detalle</Link></button>
      </div><ItemCount
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleRestar={handleRestar}
        handleAgregar={() => { agregarAlCarrito(product, cantidad) }}
      />

    </article>
  );
};
export default Item;