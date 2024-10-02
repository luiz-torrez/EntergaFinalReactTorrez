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
      <Route exact path = "/samsung"element={<SamsungView/>}/>
      <Route exact path = "/iphone"element={<IphoneView/>}/>
      <Route exact path = "/xiaomi"element={<XiaomiView/>}/>
      <Route exact path = "/motorola/:categoryId"element={<MotorolaView/>}/>
      <Route exact path = "/product/:id"element={<ProductView/>}/>
    </Routes>
    </div></BrowserRouter>
    </>
    
  )
}

export default App
