import React from 'react'
import {ProductsProvider} from "./context/ProductContext"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './Components/Navbar/Navbar';
import Home from './pages/home';
import Xiaomi from './pages/Xiaomi';
import Iphone from './pages/Iphone';
import Motorola from './pages/Motorola';
import Samsung from './pages/Samsung';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';




const App = () => {
  return (
  <>
  <BrowserRouter>
    <ProductsProvider >
      <CartProvider>
      <NavBar/>
      
      <Routes>
        <Route exact path = "/"element={<Home/>}/>
        <Route exact path = "/categories/:categoryId"element={<Samsung/>}/>        
        <Route exact path = "/categories/:categoryId"element={<Iphone/>}/>
        <Route exact path = "/categories/:categoryId"element={<Xiaomi/>}/>
        <Route exact path = "/categories/:categoryId"element={<Motorola/>}/>
        <Route exact path = "/product/:idSong"element={<Detail/>}/>
        <Route exact path = '/checkout'element={<Checkout/>}/>

      </Routes>
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
  </>

  )
}

export default App
