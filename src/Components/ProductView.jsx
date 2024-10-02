import './ProductCard.css'
import { Link, useParams } from "react-router-dom";
import { getProduct } from '../AsyncMock';
import { useEffect, useState } from 'react';



export default function ProductView({}){


  const[product, setProduct]=useState({})

  const{id} =useParams();

  useEffect(()=>{
    setProduct(getProduct(id))
  },[]);
  



  return (
    <>
    <div>Detalle</div>
        <article className='card'>
          <h4>{product.nombre}</h4>
          <img src={product.img} alt={product.nombre} />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque impedit laborum tempora illo, similique voluptatum. Quia mollitia fugit obcaecati omnis repellat totam illum, ducimus, expedita inventore quidem perspiciatis exercitationem.</p>
          <div className='contenido'>
            <p>Precio ${product.precio}</p>
            <button>Comprar</button>
            
          </div>
          
        </article>             
    </>
  );
}