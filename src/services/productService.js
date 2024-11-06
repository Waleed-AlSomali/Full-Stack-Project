import axios from 'axios';

// const baseURL = 'https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products';

// PageNumber=1&PageSize=4&SortBy=title&SortOrder=asc&Search=

    // PageNumber = 1,
    // PageSize = 4,
    // Search = '',
    // SortBy = 'title',
    // SortOrder = 'asc'

export const getAllProducts = async () => {
    const res = await axios(`https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products?PageNumber=1&PageSize=4&SortBy=title&SortOrder=asc&Search=`);
    console.log(res.data.data.items)
    return res.data.data.items;
};
export const getSingleProduct = async (id) => {
    const res = await axios(`https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products/${id}`);
    return res.data.data;
};
