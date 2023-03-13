import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './layout/Layout'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import RegisterManager from './views/RegisterManager'
import './App.css'

function App() {

  const router = Router([
    {
      path: '/',
      element: <ProtectedRoute> <Layout/> </ProtectedRoute>, 
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/adduser',
          element: <Register/>
        },
        {
          path: 'edituser/:id',
          element: <Register edit={true}/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register/manager',
      element: <RegisterManager/>
    }
  ])



  return <RouterProvider router={router}/>
}

export default App
