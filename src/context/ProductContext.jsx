import React, { createContext, useEffect, useState } from "react";

import { getAllProducts, getSingleProduct } from "../services/productService";
import PropTypes from "prop-types";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [cartItem, setCartItem] = useState([])

    const fetchProductsData = async () => {
        try {
            setIsLoading(true);
            const productsData = await getAllProducts();
            setProducts(productsData.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    return <ProductContext.Provider value={{products, isLoading, error, setProducts}}>
        {children}</ProductContext.Provider>
};

ProductProvider.prototype = {
    children: PropTypes.node,
};