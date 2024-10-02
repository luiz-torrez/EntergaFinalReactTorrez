import { useEffect, useState } from 'react';
import { getCategory, getProducts } from '../AsyncMock';
import React from 'react'
import Productcard from './Productcard';
import './ProductList.css'
import { useParams } from 'react-router-dom';


export default function ProductsList (){

    const [products, setProduct]=useState ([]);
    const{categoryId}=useParams();
    
    useEffect(()=>{
      if (categoryId){
        const filteredProducts = getCategory(categoryId);
        setProduct(filteredProducts);
      }else{
        getProducts.then(data => setProduct(data));}
    },[categoryId]);
    
    return (
    <>
      <section className='list-container'>
        {products.map(prod=> <Productcard key={prod.id} product={prod}/>)}
      </section>
    </>
  );


    
}


