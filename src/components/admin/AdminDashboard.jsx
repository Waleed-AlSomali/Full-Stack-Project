import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import AdminSidebar from './AdminSidebar';
import AdminManageProducts from './AdminManageProducts';
import { Outlet } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <Box display="flex">
      <AdminSidebar />
      <Container>
        <Typography variant="h4" gutterBottom  >
          Admin Dashboard
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  )
};

export default AdminDashboard;