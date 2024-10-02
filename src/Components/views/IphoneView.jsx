import React from 'react'
import ProductsList from '../ProductsList'
import { useParams } from "react-router-dom";

const IphoneView = () => {
  const{categoryId}=useParams();

  return (
    <div>
      <h2>iphone</h2>
      <section><ProductsList/></section>
    </div>
  )
}

export default IphoneView
