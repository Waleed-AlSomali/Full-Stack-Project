import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <Box sx={{ padding: '2rem', minHeight: '10vh' }}>
      <Typography variant="h1" sx={{ color: '#512D6D', marginBottom: '1rem' }}>
        About Page
      </Typography>

      <Typography variant="h3" sx={{ color: '#512D6D' }}>
        This is a full stack project training made by Integrify in SDA Riyadh
      </Typography>
    </Box>
  )
};

export default About;
