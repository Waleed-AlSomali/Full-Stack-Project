import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react'

const SignUp = () => {

    

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2rem",
            }}
        >
            <Typography variant="h2" component="h2" sx={{ marginBottom: "1.5rem", color: '#512D6D' }}>
                User Sign-Up
            </Typography>

            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
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
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    type="email"
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
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    name="password"
                    type="password"
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

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: "10px",
                        fontSize: "16px",
                        backgroundColor: '#512D6D', 
                        '&:hover': {
                            backgroundColor: '#7B4F96',
                        },
                    }}
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    );
};


export default SignUp;