import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

import useProduct from '../hooks/useProduct';

const SortProducts = () => {
  const { sortBy, setSortBy } = useProduct();

  const handleSortChange = (event) => {
    setSortBy(event.target.value)
  }
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortBy}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value='title_asc'>Title (A-Z)</MenuItem>
          <MenuItem value='title_desc'>Title (Z-A)</MenuItem>
          <MenuItem value='price_asc'>Price (Low to High)</MenuItem>
          <MenuItem value='price_desc'>Price (High to Low)</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export default SortProducts;