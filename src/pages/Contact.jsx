import { Box, Typography } from '@mui/material';
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h1" sx={{ color: '#512D6D', marginBottom: '1rem' }}>
        Contact Page
      </Typography>

      <Typography variant="h3" sx={{ color: '#512D6D' }}>
        Contact me by my email: <a href="mailto:JohnBro@example.com" style={{ color: '#512D6D' }}>JohnBro@example.com</a>
      </Typography>
    </Box>
  )
};

export default Contact;
