import React from 'react'
// import ProductsList from '../ProductsList'
import ItemListContainer from '../Item/ItemListContatiner'
import { useParams } from 'react-router-dom'

const MotorolaView = () => {
  const{categoryId}=useParams();

  
  return (
    <div>
      <h2>motorola</h2>
      <section><ItemListContainer/></section>
    </div>
  )
}

export default MotorolaView
