import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardContent, Container, Typography } from '@mui/material';

import { getSingleProduct } from '../services/productService';


const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams();

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
      {product && (
        <Container >
          <Card>
            <CardContent>
              <Typography variant='h4'>Title = {product.title}</Typography>
              <Typography variant='h4'>Quantity = {product.quantity}</Typography>
              <Typography variant='h4'>Price = {product.price}$</Typography>
              <Typography variant='h4'>{product.description}</Typography>
            </CardContent>
          </Card>
        </Container>)}

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