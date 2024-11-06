import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CameraDetail from './components/CameraDetail/CameraDetail.jsx';
import ListedProduct from './components/listedProducts/ListedProduct.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    ErrorElement :<ErrorPage></ErrorPage>,
    children :[
      {
        path :'/',
        element: <Home></Home>
      },
      {
        path :'cameras/:id',
        element :<CameraDetail></CameraDetail>,
        loader : () =>fetch('../public/camera.json')
      },
{
  path:'listedProduct',
  element:<ListedProduct></ListedProduct>,
  loader:()=>fetch('../public/camera.json')
},
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
