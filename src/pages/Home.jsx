import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/productService';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError ] = useState(null);

  const fetchProductsData = async () => {
    try {
          setIsLoading(true);
          const productsData = await getAllProducts();
          console.log(productsData.data);
          setProducts(productsData.data);
          setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  
  if (isLoading) {
    return <h2>Products are loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>Welcome to my humble store</h1>
      <section>
      {products.map((product) => {
        return ( <article key={product.id}>
          <h2>Title = {product.title}</h2>
          <p>Quantity = {product.quantity}</p>
          <p>Price = {product.price}$</p>
          <p>{product.description}</p>
        </article>
        )
      })}
      </section>
    </div>
  );
};

export default Home;
