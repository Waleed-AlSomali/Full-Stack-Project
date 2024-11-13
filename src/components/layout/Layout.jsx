import React from 'react'

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
};

export default Layout;
