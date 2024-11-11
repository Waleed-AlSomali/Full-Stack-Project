import React from 'react'
import PropTypes from 'prop-types';
import { Grid2, Typography } from '@mui/material';

import Product from './Product';
import useProduct from '../hooks/useProduct';


const Products = () => {
  const { products, isLoading, error } = useProduct();


  if (isLoading) {
    return <Typography variant='h2'>Products are loading...</Typography>;
  }
  if (error) {
    return <Typography variant='h2'>{error.message}</Typography>;
  }

  if (products.length === 0) {
    <Typography>There is no prodcuts available</Typography>
  }
  return (
    <div>
      <Grid2 container spacing={4}>
        {products.map((product) => (<Product product={product} key={product.productID} />))}
      </Grid2>
    </div>
  );
};

Products.prototype = {
  products: PropTypes.array
}

export default Products;
