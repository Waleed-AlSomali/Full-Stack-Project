import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useCart from '../hooks/useCart';


const Product = ({ product }) => {

    const { addToCart } = useCart();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: 6,
                    },
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        height: { xs: 'auto', sm: 200, md: 200 },
                        width: '100%',
                        objectFit: 'fit',
                    }}
                    src={product.imageUrl}
                    alt={product.title}
                />
                <CardContent>
                    <Typography variant="h5">{product.title}</Typography>
                    <Typography>Quantity = {product.quantity}</Typography>
                    <Typography>Price = {product.price}$</Typography>
                    <Typography>{product.description}</Typography>
                    <Button fullWidth sx={{ marginTop: '16px' }}>
                        <Link to={`products/${product.productID}`}>Show details</Link>
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ marginTop: '16px' }}
                        onClick={() => addToCart(product)}
                    >
                        Add To Cart
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

Product.prototype = {
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
        description: PropTypes.string,
    }),
};

export default Product;
