import React from 'react'
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div>
        <header> 
            <Navbar />
        </header>
        <main> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consectetur blanditiis molestias quia dolores fugiat officia tempora impedit exercitationem voluptatem dignissimos, ea necessitatibus? Ipsum perferendis cupiditate esse explicabo iusto aperiam.</p> </main>
        <footer>Footer</footer>
    </div>
  )
};

export default Layout;
