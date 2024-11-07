import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext';

const SearchInput = () => {
    const { setSearchField } = useContext(ProductContext);

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
