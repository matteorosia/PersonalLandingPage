import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./style.css"; 

//Pages
import App from './App.jsx';
import Pannel from './Pannel.jsx';
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>Error 404</div>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/panel",
    element: <Pannel/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
