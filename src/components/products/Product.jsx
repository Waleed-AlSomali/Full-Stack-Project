import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useCart from '../hooks/useCart';


const Product = ({ product }) => {

    const { addToCart } = useCart();

    return (

        <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
                component="img"
                height="180"
                src={product.imageUrl}
                alt={product.title}
                sx={{ objectFit: 'contain', marginBottom: 2 }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h5">{product.title}</Typography>
                <Typography>Quantity = {product.quantity}</Typography>
                <Typography>Price = {product.price}$</Typography>
                <Typography>{product.description}</Typography>
                <Button
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    <Link to={`products/${product.productID}`}>Show details</Link>
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ marginTop: 2 }} 
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </Button>
            </CardContent>
        </Card>
    </Grid>
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
