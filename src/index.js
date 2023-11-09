import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";



// pages
import Home from './App';
import Shop from './pages/shop all/script';
import ElectricScooter from './pages/electric-scooter';
import Accessories from './pages/accessonries/index';
import Contact from './pages/contact/contact'
import Login from './pages/login/index'
import Register from './pages/register/index'
import AddToCart from './pages/add-to-cart/index'
import Detail from './pages/Detail';
import { Provider } from "react-redux";
import { globalState } from './redux/store';
import Eror from './pages/404/404';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "electric",
    element: <ElectricScooter />,
  },

  {
    path: "Accessories",
    element: <Accessories />,
  },

  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Eror />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "add",
    element: <AddToCart />,
  }, {
    path: "Detail/:id",
    element: <Detail />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render((

  <Provider store={globalState}>
    <RouterProvider router={router} />
  </Provider>



)
);

