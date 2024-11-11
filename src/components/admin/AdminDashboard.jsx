import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import AdminSidebar from './AdminSidebar';
import AdminMangeProducts from './AdminManageProducts';

const AdminDashboard = () => {
  return (
    <Box display="flex">
      <AdminSidebar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Box sx={{ mt: 4 }}>
          <AdminMangeProducts />
        </Box>
      </Container>
    </Box>
  )
};

export default AdminDashboard;