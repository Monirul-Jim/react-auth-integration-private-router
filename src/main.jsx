import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Main from './Layout/Main'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import AuthProvider from './component/authProvider/AuthProvider'
const router=createBrowserRouter([
 {
   path:'/',
   element:<Main></Main>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
