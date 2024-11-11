import axios from 'axios';

const baseURL = 'https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products';


export const getAllProducts = async (
    pageNumber = 1,
    pageSize = 4,
    sortBy = 'title_asc',
    search = ''
) => {

    const params = new URLSearchParams();

    params.append('pageNumber', pageNumber);
    params.append('pageSize', pageSize);

    if (search) {
        params.append('search', search);
    }

    if (sortBy) {
        params.append('sortBy', sortBy);
    }
    const response = await axios.get(`${baseURL}?${params.toString()}`);
    console.log(response.data.data)
    return response.data.data;
};

export const getSingleProduct = async (id) => {
    const res = await axios(`${baseURL}/${id}`);
    return res.data.data;
};

export const deleteProduct = async (id) => {
    const res = await axios.delete(`${baseURL}/${id}`);
    console.log(res.data.data)
    return res.data.data  
};

export const updateProduct = async (id) => {
    const res = await axios.put(`${baseURL}/${id}`);
    return res.data.data;
};
