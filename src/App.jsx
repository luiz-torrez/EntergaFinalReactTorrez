import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import HomeView from './Components/views/HomeView';
import SamsungView from './Components/views/SamsungView';
import IphoneView from './Components/views/IphoneView';
import XiaomiView from './Components/views/XiaomiView';
import MotorolaView from './Components/views/MotorolaView';
import ProductView from './Components/ProductView';


const App = () => {
  return (<><BrowserRouter>
  <div >
      <Navbar /><Routes>
      <Route exact path = "/"element={<HomeView/>}/>
      <Route exact path = "/samsung/:categoryId"element={<SamsungView/>}/>
      <Route exact path = "/categories/:categoryId"element={<IphoneView/>}/>
      <Route exact path = "/xiaomi/:categoryId"element={<XiaomiView/>}/>
      <Route exact path = "/categories/:categoryId"element={<MotorolaView/>}/>
      <Route exact path = "/product/:id"element={<ProductView/>}/>
    </Routes>
    </div></BrowserRouter>
    </>
    
  )
}

export default App
