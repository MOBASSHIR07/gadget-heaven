import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import AllProducts from './components/AllProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
        children: [
          {
            index: true,
            loader: () => fetch('/fakeData.json'),
            element: <AllProducts />,
          },
          {
            path: "category/allproducts",
            loader: () => fetch('/fakeData.json'),
            element: <AllProducts />,
          },
          {
            path: "category/:categoryName",
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




    ],
    errorElement: <div>Oops! Something went wrong.</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
