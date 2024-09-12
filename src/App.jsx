import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContatiner'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Bienvenido a mi e-commerce'/> 
    </div>
  )
}

export default App
