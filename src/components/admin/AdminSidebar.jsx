import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 250 },
        borderRight: { md: '1px solid #ddd' },
        height: { md: '100vh' },
        padding: 2,
        borderBottom: { xs: '1px solid #ddd', md: 'none' },
      }}
    >
      <List>
        <ListItemButton component={Link} to="/dashboard/admin">
        <ListItemIcon>
          
        </ListItemIcon>
        </ListItemButton>
        <ListItemButton component={Link} to="products">
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton component={Link} to="products/create" sx={{ pl: 4 }}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Create Product" />
            </ListItemButton>
        <ListItemButton component={Link} to="products/edit" sx={{ pl: 4 }}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Edit Product" />
            </ListItemButton>
      </List>
    </Box>


  )
}

export default AdminSidebar
