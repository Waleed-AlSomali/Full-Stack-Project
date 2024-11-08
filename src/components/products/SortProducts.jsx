import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext';

const SortProducts = () => {
    const {sortBy, setSortBy, sortOrder, setSortOrder } = useContext(ProductContext)

    const handleSortChange = (event) => {
                setSortBy(event.target.value)
                setSortOrder(event.target.value);

}
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value= {`SortBy=${sortBy}&SortOrder=${sortOrder}`}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value='SortBy=title&SortOrder=asc'>Title (A-Z)</MenuItem>
          <MenuItem value='SortBy=title&SortOrder=desc'>Title (Z-A)</MenuItem>
          <MenuItem value='SortBy=price&SortOrder=asc'>Price (Low to High)</MenuItem>
          <MenuItem value='SortBy=price&SortOrder=desc'>Price (High to Low)</MenuItem>
          <MenuItem value='SortBy=date&SortOrder=asc'>Date (Oldest First)</MenuItem>
          <MenuItem value='SortBy=date&SortOrder=desc'>Date (Newest First)</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
export default SortProducts;