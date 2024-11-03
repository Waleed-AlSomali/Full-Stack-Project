import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  
  const { id } = useParams();
    
  const fetchProductData = async (productID) => {
    try {
        setIsLoading(true);
        const singleProductData = await getSingleProduct(productID);
        console.log(singleProductData);
        setProducts(singleProductData.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
    }
};

useEffect(() => {
    fetchProductData();
})
  return (
    <div>
       <h3>Title = {product.title}</h3>
        <p>Quantity = {product.quantity}</p>
        <p>Price = {product.price}$</p>
        <p>{product.description}</p>
    </div>
  )
};

export default ProductDetails;

// const {id} =  useParams() 
// const id =  useParams().id

// id of product detail 
// use api from backend to call api to get product 
//id: 1231232121
// `locahost:8080/api/products/${id}`