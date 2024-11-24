import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';

import { getSingleProduct } from '../services/productService';
import useCart from '../components/hooks/useCart';


const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const fetchProductData = async (id) => {
    const singleProductData = await getSingleProduct(id);
    console.log(singleProductData);
    setProduct(singleProductData);
  };

  useEffect(() => {
    fetchProductData(id);
  }, [id])

  const isInCart = cart.some((item) => item.productID === product.productID);

  return (
    <div>
      {product && (
        <Container maxWidth="md" style={{ marginTop: '20px' }} >
          <Card>
          {product.ImageUrl && (
          <CardMedia
            component="img"
            height="400"
            image={product.imageUrl || 'https://via.placeholder.com/150'}
            alt={product.title}
          />
        )}
            <CardContent>
              <Typography variant='h4'>{product.title}</Typography>
              <Typography variant='h6'>Available Quantity = {product.quantity}</Typography>
              <Typography variant='h6'>Price = {product.price}$</Typography>
              <Typography variant='h6'>{product.description}</Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ marginTop: '16px' }}
                onClick={() => addToCart(product)}
                disabled={isInCart}
              >
                {isInCart ? 'Already in Cart' : 'Add To Cart'}
              </Button>
            </CardContent>
          </Card>
        </Container>)}

    </div>
  )
};

export default ProductDetails;