import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
  sx={{
    backgroundColor: '#333',
    py: 2,
    mt: 4,
    position: 'relative',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    color: '#FFEB3B', 
  }}
>
  <Container maxWidth="lg">
    <Typography variant="body2" color="inherit">
      {'©'} Waleed AlSomali {new Date().getFullYear()}
    </Typography>
  </Container>
</Box>
  );
};


export default Footer;
