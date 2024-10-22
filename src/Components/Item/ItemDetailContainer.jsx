// export default function ItemDetailContainer ({product}){
//     const [, , addItem] = useContext(CartContext);
    
//     const handleClick = () => {
//         addItem(product);
//       };

//       return(
//         <>
//         <article className='card'>
//           <h4>{product.nombre}</h4>
//           <img src={product.img} alt={product.nombre} />
//           <div className='contenido'>
//           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis itaque impedit laborum tempora illo, similique voluptatum. Quia mollitia fugit obcaecati omnis repellat totam illum, ducimus, expedita inventore quidem perspiciatis exercitationem.</p>
//             <p>Precio ${product.precio}</p>
//             <button onClick={handleClick}>Comprar</button> 	
//           </div>
          
//         </article>
//         </>
//       )
// }