import axios from 'axios';

export const getAllProducts = async () => {
    const res = await axios('https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products?PageNumber=1&PageSize=3');
    return res.data.data.items;
};
export const getSingleProduct = async (id) => {
    const res = await axios(`https://sda-3-onsite-waleed-alsomali.onrender.com/api/v2/products/${id}`);
    return res.data.data;
};
