import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { deleteProduct, getAllProducts, updateProduct } from "../services/productService";
import { ProductContext } from './ProductContext';

export const ProductProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState('title_asc');
    const [searchField, setSearchField] = useState('');

    const fetchProductsData = async (pageNumber, pageSize, sortBy, searchField) => {
        try {
            setIsLoading(true);
            const allProducts = await getAllProducts(
                pageNumber,
                pageSize,
                sortBy,
                searchField
            );
            setProducts(allProducts.items);
            setTotalPages(allProducts.totalPages);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchProductsData(pageNumber, pageSize, sortBy, searchField);
    }, [pageNumber, pageSize, sortBy, searchField]);

    const removeProduct = async (productID) => {
        await deleteProduct(productID);
        setProducts((prevProducts) => prevProducts.filter((product) => product.productID !== productID))
    };

    const editProduct = async (productID, productData) => {
        const updatedProduct = await updateProduct(productID, productData);
        setProducts((prevProducts) => prevProducts.map((product) => (product.productID === productID ? updatedProduct : product))
        )
    };

    return <ProductContext.Provider value={{
        products, isLoading, error, setProducts,
        pageNumber, setPageNumber, pageSize, setPageSize,
        sortBy, setSortBy,
        totalPages, searchField, setSearchField, removeProduct, editProduct
    }}>
        {children}</ProductContext.Provider>
};

ProductProvider.prototype = {
    children: PropTypes.node,
};