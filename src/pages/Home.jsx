import React, { useContext } from 'react'

import Products from '../components/products/Products';
import { ProductContext } from '../context/ProductContext';

const Home = () => {
  const { isLoading, error, products } = useContext(ProductContext);
  
  if (isLoading) {
    return <h2>Products are loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  } 

  return (
    <div>
      <h1>Welcome to my humble store</h1>
      <Products products= {products} />
    </div>
  );
};

export default Home;
