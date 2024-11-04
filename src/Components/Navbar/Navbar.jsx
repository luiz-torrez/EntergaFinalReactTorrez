import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

import "./navbar.css";

const NavBar = () => {

  return (
    <header className="herader">
    <Link to='/' className="logo">M.Movil</Link >
    <nav className="navbar">
        <Link to='/categories/Samsung' className="nav-text">Samsung</Link>
        <Link to='/categories/Xiaomi' className="nav-text">Xiaomi</Link>
        <Link to='/categories/Iphone' className="nav-text">Iphone</Link>
        <Link to='/categories/Motorola' className="nav-text">Motorola</Link>
        <Link to='/checkout' className="nav-text">Checkout</Link>

    </nav>
    <CartWidget/>
</header>
  );
};
export default NavBar;