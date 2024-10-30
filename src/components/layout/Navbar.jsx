import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Outlet />
    </nav>
  )
};

export default Navbar;
