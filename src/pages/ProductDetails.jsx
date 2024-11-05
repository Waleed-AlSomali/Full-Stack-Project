import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../services/productService';


const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  console.log("id in product details ", id)

  const fetchProductData = async (id) => {
    const singleProductData = await getSingleProduct(id);
    console.log(singleProductData);
    setProduct(singleProductData);
  };

  useEffect(() => {
    fetchProductData(id);
  }, [id])


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