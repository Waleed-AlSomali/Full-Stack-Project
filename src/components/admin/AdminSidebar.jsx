import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 250 },
        borderRight: { md: '1px solid #ddd' },
        height: '100vh', 
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: 2, 
        paddingBottom: 8,
        borderBottom: { xs: '1px solid #ddd', md: 'none' },
        backgroundColor: '#333',
        color: '#FFEB3B',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto', 
        zIndex: 1000, 
      }}
    >
      <List>
        <ListItemButton
          component={Link}
          to="/dashboard/admin"
          sx={{
            '&:hover': {
              backgroundColor: '#7B4F96',
              color: '#fff',
            },
            '&:focus': {
              backgroundColor: '#7B4F96',
              color: '#fff',
              outline: '3px solid #7B4F96',
            },
            paddingLeft: 2,
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }} />
          <ListItemText primary="Admin Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="products"
          sx={{
            '&:hover': {
              backgroundColor: '#7B4F96',
              color: '#fff',
            },
            '&:focus': {
              backgroundColor: '#7B4F96',
              color: '#fff',
              outline: '3px solid #7B4F96',
            },
            paddingLeft: 2,
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }} />
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="products/create"
          sx={{
            pl: 4,
            '&:hover': {
              backgroundColor: '#7B4F96',
              color: '#fff',
            },
            '&:focus': {
              backgroundColor: '#7B4F96',
              color: '#fff',
              outline: '3px solid #7B4F96',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }} />
          <ListItemText primary="Create Product" />
        </ListItemButton>
      </List>
    </Box>
  )
}

export default AdminSidebar
