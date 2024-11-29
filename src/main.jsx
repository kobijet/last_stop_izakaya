import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './pages/home/Home.jsx';
import Error from './pages/error/Error.jsx';
import Food from './pages/menu/Food.jsx';
import Drinks from './pages/menu/Drinks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/last_stop_izakaya",
        element: <Home />,
        index: true,
      },
      {
        path: "/last_stop_izakaya/food",
        element: <Food />
      },
      {
        path: "/last_stop_izakaya/drinks",
        element: <Drinks />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
