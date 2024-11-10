import React from 'react'
import { Box, Pagination } from '@mui/material';

import useProduct from '../hooks/useProduct';

const PaginationProducts = () => {
    const { pageNumber, setPageNumber, totalPages } = useProduct();

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
