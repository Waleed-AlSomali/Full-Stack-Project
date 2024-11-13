import React from 'react'

import './App.css'
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';
import { UserProvider } from './context/UserProvider';
import Routes from './routes';


const App = () => {



  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  )
}

export default App;
