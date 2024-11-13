import { Box, Typography } from '@mui/material';
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h1" sx={{ color: '#512D6D', marginBottom: '1rem' }}>
        Contact Page
      </Typography>

      <Typography variant="h3" sx={{ color: '#512D6D' }}>
        Contact me by my email: <a style={{ color: '#512D6D' }}>Waleed@Example.com</a>
      </Typography>
    </Box>
  )
};

export default Contact;
