import React from 'react'
import {ProductsProvider} from "./context/ProductContext"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './Components/Navbar/Navbar';


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
        <Route exact path = "/product/:id"element={<ProductView/>}/>
      </Routes>
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
  </>

  )
}

export default App
