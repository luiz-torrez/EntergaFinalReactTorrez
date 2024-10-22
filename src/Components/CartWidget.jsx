import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget(){
  const [cart] = useContext(CartContext);

    return (<><section><button className="cesta-carrito">
      <i className="fa-solid fa-cart-shopping"></i>
    </button>
    <p className="contador-carrito">{cart.length}</p>
    </section>
    
    
    
    </>);
}
