import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import User from '../components/User/User'

const PublicRoute = ({children}) => {
  const isAuthenticated = !!localStorage.getItem('access_token')
  return isAuthenticated? <Navigate to="/user" />: children
}

const PrivateRoute = ({children}) => {
  const isAuthenticated = !!localStorage.getItem('access_token')
  return isAuthenticated? children: <Navigate to="/login" />
}

export const router = createBrowserRouter([
  {
    path: "/",  
    element: <PublicRoute><Login /></PublicRoute>, 
  },
  {
    path: "/login",  
    element: <PublicRoute><Login /></PublicRoute>, 
  },
  {
    path: "/register",  
    element:  <PublicRoute><Register /></PublicRoute>,
  },
  {
    path: "/user",  
    element: <PrivateRoute><User /></PrivateRoute>,
  },
]);

export default router;
