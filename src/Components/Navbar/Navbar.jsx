import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="herader">
        <Link to='/' className="logo">M.Movil</Link >
        <nav className="navbar">
            <Link to='/samsung' className="nav-text">Samsung</Link>
            <Link to='/xiaomi' className="nav-text">Xiaomi</Link>
            <Link to='/iphone' className="nav-text">Iphone</Link>
            <Link to='/motorola' className="nav-text">Motorola</Link>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default Navbar
