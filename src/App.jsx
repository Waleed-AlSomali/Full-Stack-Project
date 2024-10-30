import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
      ]  
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
