import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const baseURL = 'https://sda-3-onsite-waleed-alsomali.onrender.com/api/auth';
// const baseURL = 'http://localhost:5125/api/auth';



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

  //  console.log("data signin ", signinData)
    const response = await axios.post(`${baseURL}/login`, signinData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const token = response.data.token;
    const userRole = jwtDecode(token)
    localStorage.setItem("token", token)
    console.log(userRole)
    localStorage.setItem("user", userRole.role)

    return response.data;

}