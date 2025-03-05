import ProductList from '../components/ProductList';
import React from 'react'



async function Home() {
  const res =  await fetch('https://fakestoreapi.com/products/');
  const products = await res.json() 
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}

export default Home