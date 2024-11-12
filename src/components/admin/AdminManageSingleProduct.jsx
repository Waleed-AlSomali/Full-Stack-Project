import { Button, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'

import useProduct from '../hooks/useProduct';
import { getAllProducts } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const AdminManageSingleProduct = ({ product }) => {

    const { removeProduct, editProduct } = useProduct();
    const navigate = useNavigate();
    const handleDelete = async () => {
        await removeProduct(product.productID);
        await getAllProducts();
    }

    const handleEdit = async () => {
        navigate('/dashboard/admin/products/edit')
        await editProduct(id, productData);
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
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ marginTop: '16px' }}
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

AdminManageSingleProduct.prototype = {
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
        description: PropTypes.string,
    }),
};

export default AdminManageSingleProduct;
