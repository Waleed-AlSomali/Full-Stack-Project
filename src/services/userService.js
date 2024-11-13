import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const baseURL = 'https://sda-3-onsite-waleed-alsomali.onrender.com/api/auth';



export const signUp = async (signupData) => {

    console.log("data signup ", signupData)
    const response = await axios.post(`${baseURL}/register`, signupData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data;
};

export const signIn = async (signinData) => {

    const response = await axios.post(`${baseURL}/login`, signinData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("response from signin ", response)
    const token = response.data.token;
    const decodedUser = jwtDecode(token)
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(decodedUser))

    return decodedUser;

}