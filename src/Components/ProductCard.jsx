import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Productcard ({product}){
  const{id}=useParams();


  return (
    <>
        <article className='card'>
          <h4>{product.nombre}</h4>
          <img src={product.img} alt={product.nombre} />
          <div className='contenido'>
            <p>Precio ${product.precio}</p>
            <button><Link to= {`/product/${product.id}`}>Detalle</Link></button> 	
          </div>
          
        </article>             
    </>
  );
}