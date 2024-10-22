import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function ItemCard({ product }) {
  const [, , addItem] = useContext(CartContext);

  const handleClick = () => {
    addItem(product);
  };
  

  return (
    <>
      <article className='card'>
          <h4>{product.nombre}</h4>
          <img src={product.img} alt={product.nombre} />
          <div className='contenido'>
            <p>Precio ${product.precio}</p>
            <button><Link to= {`/product/${product.id}`}>Detalle</Link></button>
            <button onClick={handleClick}>Comprar</button> 	
          </div>
          
        </article>
    </>
  );
}