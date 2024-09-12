import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <header className="herader">
        <a href="/" className='logo'>M.Movil</a>
        <nav className="navbar">
            <a href='/' className="nav-text">Home</a>
            <a href='/' className="nav-text">Servicios</a>
            <a href='/' className="nav-text">Productos</a>
            <a href='/' className="nav-text">Contactos</a>
            <a href='/' className="nav-text">Ayuda</a>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default Navbar
