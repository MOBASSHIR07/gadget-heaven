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

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
