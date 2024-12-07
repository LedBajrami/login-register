import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User'
export const router = createBrowserRouter([
  {
    path: "/",  
    element: <Login />, 
  },
  {
    path: "/register",  
    element: <Register />,
  },
  {
    path: "/user",  
    element: <User />,
  },
]);

export default router;
