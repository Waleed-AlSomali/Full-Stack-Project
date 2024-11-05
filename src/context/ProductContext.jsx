import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [cartItem, setCartItem] = useState([])

    const fetchProductsData = async () => {
        try {
            setIsLoading(true);
            const allProducts = await getAllProducts();
            setProducts(allProducts);
            console.log(allProducts);
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