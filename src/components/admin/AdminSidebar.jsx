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
    backgroundColor: '#333', // Dark background for the sidebar
    color: '#FFEB3B', // Yellow text color for visibility
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }}
>
  <List>
    <ListItemButton
      component={Link}
      to="/dashboard/admin"
      sx={{
        '&:hover': {
          backgroundColor: '#7B4F96', // Hover background in purple
          color: '#fff', // Text color changes to white on hover
        },
        '&:focus': {
          backgroundColor: '#7B4F96', // Focus background in purple
          color: '#fff', // Text color on focus
          outline: '3px solid #7B4F96', // Visible focus outline in purple for contrast
        },
        paddingLeft: 2,
      }}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {/* Add icon here */}
      </ListItemIcon>
      <ListItemText primary="Admin Dashboard" />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to="products"
      sx={{
        '&:hover': {
          backgroundColor: '#7B4F96', // Hover background in purple
          color: '#fff', // Text color changes to white on hover
        },
        '&:focus': {
          backgroundColor: '#7B4F96', // Focus background in purple
          color: '#fff', // Text color on focus
          outline: '3px solid #7B4F96', // Visible focus outline in purple
        },
        paddingLeft: 2,
      }}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {/* Add icon here */}
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to="products/create"
      sx={{
        pl: 4,
        '&:hover': {
          backgroundColor: '#7B4F96', // Hover background in purple
          color: '#fff', // Text color changes to white on hover
        },
        '&:focus': {
          backgroundColor: '#7B4F96', // Focus background in purple
          color: '#fff', // Text color on focus
          outline: '3px solid #7B4F96', // Visible focus outline in purple
        },
      }}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {/* Add icon here */}
      </ListItemIcon>
      <ListItemText primary="Create Product" />
    </ListItemButton>
  </List>
</Box>

  )
}

export default AdminSidebar
