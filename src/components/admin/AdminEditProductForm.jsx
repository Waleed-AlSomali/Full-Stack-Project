import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getAllProducts, getSingleProduct, updateProduct } from '../../services/productService';

const AdminEditProductForm = () => {
    const { id } = useParams();

    const [selectedData, setSelectedData] = useState(null)

    const fetchProductData = async (id) => {
        const singleProductData = await getSingleProduct(id);
        console.log(singleProductData);
        setSelectedData(singleProductData);
    };

    useEffect(() => {
        fetchProductData(id);
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedData({
            ...selectedData,
            [name]: value

        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await updateProduct(selectedData)
            const data = await getAllProducts();
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div>
            <Container maxWidth="xs">
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 4,
                    }}
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h2" gutterBottom sx={{ color: '#512D6D' }}>
                        Edit Product Form
                    </Typography>
                    <Typography>
                        Title
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        name="title"
                        type="title"
                        value={selectedData?.title}
                        onChange={handleChange}
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiInputLabel-root': {
                                color: '#512D6D',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#512D6D',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7B4F96',
                                },
                            },
                        }}
                    />
                    <Typography>
                        Quantity
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        name="quantity"
                        type="quantity"
                        value={selectedData?.quantity}
                        onChange={handleChange}
                        sx={{
                            marginBottom: "1.5rem",
                            '& .MuiInputLabel-root': {
                                color: '#512D6D',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#512D6D',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7B4F96',
                                },
                            },
                        }}
                    />
                    <Typography>
                        Price
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        name="price"
                        type="price"
                        value={selectedData?.price}
                        onChange={handleChange}
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiInputLabel-root': {
                                color: '#512D6D',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#512D6D',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7B4F96',
                                },
                            },
                        }}
                    />
                    <Typography>
                        Description
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        name="description"
                        type="description"
                        value={selectedData?.description}
                        onChange={handleChange}
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiInputLabel-root': {
                                color: '#512D6D',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#512D6D',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7B4F96',
                                },
                            },
                        }}
                    />
                    <Typography>
                        Category
                    </Typography>
                    <TextField
                        name="categoryId"
                        select
                        fullWidth
                        required
                        value={selectedData?.categoryId}
                        onChange={handleChange}
                        sx={{
                            marginBottom: "1rem",
                            '& .MuiInputLabel-root': {
                                color: '#512D6D',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#512D6D',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7B4F96',
                                },
                            },
                        }}
                    >
                        <MenuItem value="07cd6943-08f0-4850-b982-060e8bdda16f">
                            Devices
                        </MenuItem>
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            padding: "10px",
                            fontSize: "16px",
                            backgroundColor: '#512D6D',
                            '&:hover': {
                                backgroundColor: '#7B4F96',
                            },
                        }}
                    >
                        Edit Product
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default AdminEditProductForm;
