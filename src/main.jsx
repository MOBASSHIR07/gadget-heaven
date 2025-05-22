import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import { Toaster } from 'react-hot-toast';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import AllProducts from './components/AllProducts.jsx';
import DetailsMap from './components/DetailsMap.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Cart from './components/Cart.jsx';
import Wishlist from './components/Wishlist.jsx';
import Statistic from './Pages/Statistic.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            loader: () => fetch('/fakeData.json'),
            element: <AllProducts />,
          },
          {
            path: "/category/allproducts",
            loader: () => fetch('/fakeData.json'),
            element: <AllProducts />,
          },
          {
            path: "/category/:categoryName",
            loader: async ({ params }) => {
              const res = await fetch('/fakeData.json');
              const data = await res.json();
              const filtered = data.filter(product =>
                product.category.toLowerCase() === params.categoryName.toLowerCase()
              );
              return filtered;
            },
            element: <AllProducts />,
          },
        

        ],
       

      },

      {
             path:'details/:id',
        loader:async ({params})=>{
          const res = await fetch('/fakeData.json');
          const data = await res.json();
          const filtered = data.filter(product =>
            product.product_id === params.id
          )
          return filtered;

        },
        element:<DetailsMap />,
      },

      {

        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
         {
          index:true,
          element:<Cart></Cart>
         },
         {
          path:'wishlist',
          element:<Wishlist></Wishlist>
         }


        ]
      },
      {
        path:'statistics',
        element:<Statistic></Statistic>

      }

     
 



    ],
    errorElement: <div>Oops! Something went wrong.</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>
);
