import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div><Link to="/carrito"> 
      <button className="cesta-carrito">
      <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <span className="contador-carrito">{cantidadEnCarrito()}</span>
    </Link>    
    </div>
  )
}

export default CartWidget


// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// export default function CartWidget(){
//   const [cart] = useContext(CartContext);

//     return (<><section><button className="cesta-carrito">
//       <i className="fa-solid fa-cart-shopping"></i>
//     </button>
//     <p className="contador-carrito">{cart.length}</p>
//     </section>
    
    
    
//     </>);
// }