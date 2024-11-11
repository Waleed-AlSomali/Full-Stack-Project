
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <Box sx={{
      width: 250,
      borderRight: '1px solid #ddd',
      height: '100vh',
      padding: 2,
    }}>
      <List>
        <ListItemButton component={Link} to="/dashboard/admin">
        <ListItemIcon>
          
        </ListItemIcon>
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
        {/* <ListItemButton component={Link} to="/categories">
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
        <ListItemButton component={Link} to="/orders">
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton> */}
      </List>
    </Box>


  )
}

export default AdminSidebar
