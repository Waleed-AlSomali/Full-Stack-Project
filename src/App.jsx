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
import { UserProvider } from './context/UserProvider';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminMangeProducts from './components/admin/AdminManageProducts';


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
          path: "/dashboard/admin",
          element: <AdminDashboard />,
          children: [
            {
              path: "products",
              element: <AdminMangeProducts />
    
            },
          ],
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
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  )
}

export default App;
