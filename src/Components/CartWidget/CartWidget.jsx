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
