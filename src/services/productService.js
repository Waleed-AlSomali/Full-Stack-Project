import axios from 'axios';

const baseURL = 'https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products';

export const getAllProducts = async (
    PageNumber = 1,
    PageSize = 4,
    SortBy = 'title',
    SortOrder = 'asc',
    Search = ''
) => {
    const res = await axios(`${baseURL}?PageNumber=${PageNumber}&PageSize=${PageSize}&SortBy=${SortBy}&SortOrder=${SortOrder}&Search=${Search}`);
    console.log(res.data.data.items);
    return res.data.data;
};

export const getSingleProduct = async (id) => {
    const res = await axios(`${baseURL}/${id}`);
    return res.data.data;
};

// PageNumber=1&PageSize=4&SortBy=title&SortOrder=asc&Search=