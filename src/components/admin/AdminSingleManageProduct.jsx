import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'

import useProduct from '../hooks/useProduct';
import { deleteProduct } from '../../services/productService';

const AdminSingleManageProduct = ({ product }) => {

    const { removeProduct } = useProduct();
    const handleDelete = async () => {
        await removeProduct(product.productID);
    }


    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card>
                <CardContent>
                    <Typography variant='h5'> {product.title}</Typography>
                    <Typography>Quantity = {product.quantity}</Typography>
                    <Typography>Price = {product.price}$</Typography>
                    <Typography>{product.description}</Typography>
                    <Button

                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ marginTop: '16px' }}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

AdminSingleManageProduct.prototype = {
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
        description: PropTypes.string,
    }),
};

export default AdminSingleManageProduct
