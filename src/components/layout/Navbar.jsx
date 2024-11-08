import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#512D6D', boxShadow: 3 }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/" sx={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="inherit">My Store</Typography>
          </Button>
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            '&:hover': { backgroundColor: '#7B4F96' },
            '&:focus': { outline: '2px solid #FFEB3B' },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{
            '&:hover': { backgroundColor: '#7B4F96' },
            '&:focus': { outline: '2px solid #FFEB3B' },
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{
            '&:hover': { backgroundColor: '#7B4F96' },
            '&:focus': { outline: '2px solid #FFEB3B' },
          }}
        >
          Contact
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signup"
          sx={{
            '&:hover': { backgroundColor: '#7B4F96' },
            '&:focus': { outline: '2px solid #FFEB3B' },
          }}
        >
          SignUp
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signin"
          sx={{
            '&:hover': { backgroundColor: '#7B4F96' },
            '&:focus': { outline: '2px solid #FFEB3B' },
          }}
        >
          SignIn
        </Button>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
