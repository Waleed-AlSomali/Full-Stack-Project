import { Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react'

import useProduct from '../hooks/useProduct';
import { getAllProducts, getSingleProduct } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const AdminManageSingleProduct = ({ product }) => {

    const { removeProduct } = useProduct();
    const navigate = useNavigate();
    const handleDelete = async () => {
        await removeProduct(product.productID);
        await getAllProducts();
    }

    const handleEdit = async (id) => {
        navigate(`/dashboard/admin/products/edit/${product.productID}`)
        await getSingleProduct(product.productID)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant="h6">Title</Typography></TableCell>
                        <TableCell><Typography variant="h6">Quantity</Typography></TableCell>
                        <TableCell><Typography variant="h6">Price</Typography></TableCell>
                        <TableCell><Typography variant="h6">Description</Typography></TableCell>
                        <TableCell><Typography variant="h6">Actions</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={product.productID}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.price}$</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginBottom: '8px', marginRight: '8px' }}
                                onClick={() => handleDelete(product.productID)}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginBottom: '8px', marginRight: '8px' }}
                                onClick={() => handleEdit(product.productID)}
                            >
                                Edit
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
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
