import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Products from '../components/products/Products';
import SearchInput from '../components/products/SearchInput';
import PaginationProducts from '../components/products/PaginationProducts';
import SortProducts from '../components/products/SortProducts';


const Home = () => {
  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Welcome to my humble store
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <SearchInput />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SortProducts />
          </Grid>
        </Grid>
      </Box>
      <Products />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <PaginationProducts />
      </Box>
    </Container>
  );
};

export default Home;
