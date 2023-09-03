import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import About from '../Pages/About/About/About';
import Login from '../Pages/Login/Login/Login';
import SignUp from '../Pages/Login/Login/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Shared/Secret/Secret';
import Dashbord from '../Layout/Dashbord';
import MyCart from '../Pages/DashBoard/MyCart/MyCart';
import Pagenotfound from '../Pages/Shared/Pagenotfound';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'order/:category',
        element: <Order />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <Pagenotfound />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashbord />,
    children: [
      {
        path: 'mycart',
        element: <MyCart />,
      },
    ],
  },
]);
