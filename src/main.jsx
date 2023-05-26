import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/HomePage/Home/Home.jsx';
import HomeLayout from './layouts/HomeLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddToy from './pages/AddToy/AddToy';
import MyToys from './pages/MyToys/MyToys';
import AllToys from './pages/AllToys/AllToys';
import Blogs from './pages/Blogs/Blogs';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import ToyDetails from './pages/ToyDetails/ToyDetails';
import EditMyToy from './pages/MyToys/EditMyToy';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-athlete-server.vercel.app/alltoys')
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-athlete-server.vercel.app/toy/${params.id}`)
      },
      {
        path: '/editToy/:id',
        element: <PrivateRoute><EditMyToy></EditMyToy></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-athlete-server.vercel.app/toy/${params.id}`)

      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </div>
  </React.StrictMode>,
)
