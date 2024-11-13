import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from '../components/layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Cart from '../components/cart/Cart';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import AdminDashboard from '../components/admin/AdminDashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AdminEditProductForm from '../components/admin/AdminEditProductForm';
import AdminManageProducts from '../components/admin/AdminManageProducts';
import AdminCreateProduct from '../components/admin/AdminCreateProduct';



const Routes = () => {

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
              element: <AdminManageProducts />

            },
            {
              path: "products/create",
              element: <AdminCreateProduct />

            },
            {
              path: "products/edit",
              element: <AdminEditProductForm />

            },
            {
              path: "products/edit/:id",
              element: <AdminEditProductForm />

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

  return <RouterProvider router={router} />
};

export default Routes;