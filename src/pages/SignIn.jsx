import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/userService';
import useUser from '../components/hooks/useUser';



const SignIn = () => {

    const navigate = useNavigate()

    const { setUserLoggedIn } = useUser();

    const [signinData, setSigninData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSigninData({
            ...signinData,
            [name]: value

        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signIn(signinData)
            setUserLoggedIn(response)
            navigate('/')
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
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
                    User Sign-in
                </Typography>

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
            </Box>
        </Container>

    );
};
export default SignIn;