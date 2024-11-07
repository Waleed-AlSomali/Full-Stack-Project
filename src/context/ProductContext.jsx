import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchField, setSearchField] = useState('');
    // const [cartItem, setCartItem] = useState([])

    const fetchProductsData = async (pageNumber, pageSize, sortBy, sortOrder, searchField) => { 
        try {
            setIsLoading(true);
            const allProducts = await getAllProducts(
                pageNumber,
                pageSize,
                sortBy,
                sortOrder,
                searchField
            );
            setProducts(allProducts.items);
            console.log(allProducts.items);
            setTotalPages(allProducts.totalPages);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchProductsData(pageNumber, pageSize, sortBy, sortOrder, searchField);
    }, [pageNumber, pageSize, sortBy, sortOrder, searchField]);

    return <ProductContext.Provider value={{
        products, isLoading, error, setProducts,
        pageNumber, setPageNumber, pageSize, setPageSize,
        sortBy, setSortBy, sortOrder, setSortOrder,
         totalPages, searchField, setSearchField
    }}>
        {children}</ProductContext.Provider>
};

ProductProvider.prototype = {
    children: PropTypes.node,
};