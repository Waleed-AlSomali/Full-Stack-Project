import axios from 'axios';

export const getAllProducts = async () => {
    const res = await axios('https://sda-3-onsite-waleed-alsomali.onrender.com/api/products');
    return res.data;
};
export const getSingleProduct = async (id) => {
    const res = await axios(`https://sda-3-onsite-waleed-alsomali.onrender.com/api/products/${id}`);
    return res.data;
};
