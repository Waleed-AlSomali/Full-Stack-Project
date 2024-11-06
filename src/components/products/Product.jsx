import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';

import { ProductContext } from '../../context/ProductContext';


const Product = ({ product }) => {

    // const { products, setProducts } = useContext(ProductContext);

    // const handleDeleteProduct = (productID) => {
    //     const filteredProducts = products.filter((product) => product.productID !== productID);
    //     setProducts(filteredProducts);
    // };

    return (
       
            <Grid item xs={12} sm={6} md={4} >
                <Card>
                    <CardContent >
                        <Typography variant='h5'>Title = {product.title}</Typography>
                        <Typography>Quantity = {product.quantity}</Typography>
                        <Typography>Price = {product.price}$</Typography>
                        <Typography>{product.description}</Typography>
                        <Button>
                        {<Link to={`products/${product.productID}`}>Show details</Link> /* <button onClick={handleDeleteProduct}>Delete</button> */}
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
