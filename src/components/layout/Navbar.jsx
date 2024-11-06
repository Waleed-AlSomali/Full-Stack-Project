import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' style={{ flexGrow: 1 }}>
                    My Store
                </Typography>
                <Button color='inhereit' component={Link} to='/'>
                    Home
                </Button>
                <Button color='inhereit' component={Link} to='/about'>
                    About
                </Button>
                <Button color='inhereit' component={Link} to='/contact'>
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
