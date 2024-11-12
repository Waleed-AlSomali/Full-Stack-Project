import React from 'react'
import { Box, Container, Grid2 } from '@mui/material';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

import useProduct from '../hooks/useProduct'
import AdminManageSingleProduct from './AdminManageSingleProduct';
import PaginationProducts from '../products/PaginationProducts';

const ProductList = () => {
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

            <Container>
                <Grid2 container spacing={3}>
                    {products.map((product) => (<AdminManageSingleProduct product={product} key={product.productID} />))}
                </Grid2>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <PaginationProducts />
                </Box>
            </Container>

        </div>
    );
};

ProductList.prototype = {
    products: PropTypes.array
}
export default ProductList;
