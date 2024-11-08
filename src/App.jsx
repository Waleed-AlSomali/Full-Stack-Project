import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';
import { ProductProvider } from './context/ProductContext';
import SingUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
        <RouterProvider router={router} />
      </ProductProvider>
  )
}

export default App;
