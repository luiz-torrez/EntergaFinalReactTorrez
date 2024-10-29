


const ItemDetail = ({ product }) => {



    return (
      <article className='card'>
      <h4>{product.nombre}</h4>
      <img src={product.img} alt={product.nombre} />
      <div className='contenido'>
        <p>Precio ${product.precio}</p>
        {/* <button><Link to= {`/Detail/${product.id}`}>Detalle</Link></button> */}
        {/* <button onClick={handleClick}>Comprar</button>  	 */}
      </div>
      
    </article>
    );
  };
  export default ItemDetail;