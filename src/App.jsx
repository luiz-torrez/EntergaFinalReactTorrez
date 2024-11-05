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
import Checkout from './components/Checkout/Checkout';
import Carrito from './pages/Carrito';




const App = () => {
  return (
  <>
  <BrowserRouter>
    <ProductsProvider >
      <CartProvider>
      <NavBar/>
      
      <Routes>
        <Route exact path = "/"element={<Home/>}/>

        <Route exact path = '/categories/:category' element={<Samsung/>}/> 
              
        <Route exact path = '/categories/:category' element={<Iphone/>}/>

        <Route exact path = '/categories/:category' element={<Xiaomi/>}/>

        <Route exact path = '/categories/:category' element={<Motorola/>}/>
        
        <Route exact path = '/Detail/:idItem' element={<Detail/>}/>

        <Route exact path = '/checkout' element={<Checkout/>}/>

        <Route exact path = '/carrito' element={<Carrito/>}/>

      </Routes>
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
  </>

  )
}

export default App
