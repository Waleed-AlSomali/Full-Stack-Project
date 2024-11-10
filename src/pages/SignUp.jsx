import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { signUp } from '../services/userService';


const SignUp = () => {
    // to store data in form input, create useState() to store data
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // onChange to get value from input , handleChange to set input value to state
    const handleChange = (e) => {
        // const value = e.target.value 
        // const {value} = e.target
        // const name = e.target.name 
        // const {name} = e.target
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value

        })
    }
    console.log("signupData ", signupData)
    // when user clicks handlesubmit => trigger method userService.signUp(signupData) 
    // do we need to send any data ? send signupData
    const handleSubmit = async (event) => {
        event.preventDefault();
        // trigger method userService.signUp(signupData) 
        // check from the backend, whether signup successfully, return userData 
        try {
            const response = await signUp(signupData)
            console.log("response data from signup ", response)
        } catch (error) {
            throw new Error(error);
        }
    }
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
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
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
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    type="email"
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
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    name="password"
                    type="password"
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