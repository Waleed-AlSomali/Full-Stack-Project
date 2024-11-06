import { Container, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Container>
                <Typography variant='body2' color='textSecondary' align='center'>
                    {'©'}Waleed AlSomali {new Date().getFullYear()}
                </Typography>
            </Container>

        </div>
    );
};

export default Footer;
