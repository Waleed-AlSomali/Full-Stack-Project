import React from 'react'
import { Container, Typography } from '@mui/material';

import Products from '../components/products/Products';
// import SearchInput from '../components/products/SearchInput';


const Home = () => {
  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Welcome to my humble store
      </Typography>
      {/* <SearchInput /> */}
      <Products />
    </Container>
  );
};

export default Home;
