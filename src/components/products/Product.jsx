import PropTypes from 'prop-types';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ProductContext } from '../../context/ProductContext';

const Product = ({ product }) => {

    const { products, setProducts } = useContext(ProductContext);

    const handleDeleteProduct = (productID) => {
        const filteredProducts = products.filter((product) => product.productID !== productID);
        setProducts(filteredProducts);
    };

    return (<article key={product.productID}>
        <h3>Title = {product.title}</h3>
        <p>Quantity = {product.quantity}</p>
        <p>Price = {product.price}$</p>
        <p>{product.description}</p>
        <Link to={`products/${product.productID}`}>Show details</Link> <button onClick={handleDeleteProduct}>Delete</button>
    </article>
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
