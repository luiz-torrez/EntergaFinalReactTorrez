import ItemCard from './ItemCard';
import { getProducts, filterProductsByPrice ,filterProductsByCategory } from '../../firebase/firebase';
import './ItemListContainer.css'
import { useState ,useEffect } from 'react'

export default function ItemListContainer (){
    
    const [products, setProducts]= useState ([]);
    const [category, setCategory]= useState ([]);


    useEffect(() => {
        /* getSingleProduct('ZjkF4RdijYUaR3gseS30').then((response) =>
          setSingleProd(response)
        ); */
        // getProducts().then((products) => setMyProds(products));
         filterProductsByPrice(1200).then((products) => setProducts(products)); 
        //  filterProductsByCategory(category).then((products) => setMyProds(products)) 
      }, []);

    const handleUpdate = () =>{};

    const handleDelate = () =>{};


    return (
    <><section className='conteiner'>
        {products &&
        products.map((products) => <ItemCard key = {products.id} product={products}/>)}
    </section>
    

    </>);
}