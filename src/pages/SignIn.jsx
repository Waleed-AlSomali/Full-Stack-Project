import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const SignIn = () => {

    const navigate = useNavigate()

    //   const handleChange = (event) => {
    //     const {name , value} = event.target ;
    //     return setUser((prevUser) => {
    //        return {...prevUser, [name]: value};
    //     });
    //   };

    //   const handleSubmit = () => {


    //     const userData = {
    //     };

    //     if (user.email === userData.email && user.password === userData.password) {
    //       console.log('user successfully signed in');
    //       localStorage.setItem('login', JSON.stringify({ userData , isLoggedin: true}))
    //       navigate('/profile', {state: userData});
    //     } else {
    //       console.log('failed to sign in');
    //       navigate('/login');
    //     }


    //   };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4,
                }}
            >
                <Typography variant="h2" gutterBottom sx={{ color: '#512D6D' }}>
                    User Sign-in
                </Typography>

                <form noValidate autoComplete="off">
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
                        Sign-in
                    </Button>
                </form>
            </Box>
        </Container>

    );
};
export default SignIn;
