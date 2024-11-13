import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';


export const UserProvider = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useState(null);
    console.log("userLoggedIn ", userLoggedIn)

    useEffect(() => {
        const userLocalStorage = localStorage.getItem("user") || null
        if (userLocalStorage) {
            setUserLoggedIn(JSON.parse(userLocalStorage))
        }
    }, [])


    return (
        <UserContext.Provider
            value={{ setUserLoggedIn, userLoggedIn }}
        >
            {children}
        </UserContext.Provider>
    );
};
