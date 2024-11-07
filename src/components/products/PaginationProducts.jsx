import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { Box, Pagination } from '@mui/material';

const PaginationProducts = () => {
    const { pageNumber, setPageNumber, totalPages } = useContext(ProductContext);

    const handlePageChange = (page) => {
        console.log(page);
        setPageNumber(page);

    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Pagination
                count={totalPages}
                page={pageNumber}
                onChange={(event, page) => handlePageChange(page)}
                variant="outlined"
                shape="rounded"
            />
        </Box>
    );
};

export default PaginationProducts;
