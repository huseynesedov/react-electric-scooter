import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux'; 


// pages
import Home from './App';
import Shop from './pages/shop all/script';
import ElectricScooter from './pages/electric-scooter';
import Accessonries from './pages/accessonries/index';
import Contact from './pages/contact/contact'
import Login from './pages/login/index'
import Register from './pages/register/index'
import AddToCart from './pages/add-to-cart/index'
import Detail from './pages/Detail';

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
    path: "Accessonries",
    element: <Accessonries />,
  },

  {
    path: "Contact",
    element: <Contact />,
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
  },{
    path: "Detail/:id",
    element: <Detail />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render((

  <Provider store={Detail}>

    <RouterProvider router={router} />
  </Provider>

)
);

