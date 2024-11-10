import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './components/cart/cart';
import { ProductProvider } from './context/ProductProvider';
import { CartProvider } from './context/CartProvider';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
          
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />
          
        },
        {
          path: "/contact",
          element: <Contact />
          
        },
        {
          path: "/products/:id",
          element: <ProductDetails />
          
        },
        {
          path: "/signup",
          element: <SignUp />
          
        },
        {
          path: "/signin",
          element: <SignIn />
          
        },
      ]  
    },
  ]);

  return (
      <ProductProvider>
        <CartProvider>
        <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
  )
}

export default App;
