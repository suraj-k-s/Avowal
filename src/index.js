import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import NotFound from './NotFound'
import ListView from './ListView'
import TC from './TC'
import Answer from './Answer'
import Login from './Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/TC',
    element: <TC />,
  },
  {
    path: '/Question/:id',
    element: <Answer />,
  },
  {
    path: '/ListView/:id',
    element: <ListView />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
