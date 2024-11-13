import { TextField } from '@mui/material'
import React from 'react'

import useProduct from '../hooks/useProduct';

const SearchInput = () => {
    const { setSearchField } = useProduct();

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setSearchField(event.target.value);
    };
    return (
        <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleSearchChange}
        />
    )
}

export default SearchInput;
