import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Auth from "../layouts/Auth";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import User from "../pages/Dashboard/User/User";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import AddReview from "../pages/Dashboard/Add Review/AddReview";
import Booking from "../pages/Dashboard/Booking/Booking";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path:'/menu',
        element: <Menu/>
      },
      {
        path:'/shop/:category',
        element: <Shop/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      }
    ]
  },
  {
    path:'/auth',
    element:<Auth/>,
    children:[
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'signup',
        element:<SignUp/>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {
        path:'userHome',
        element:<User/>
      },
      {
        path:'reservation',
        element:<Reservation/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'review',
        element:<AddReview/>
      },
      {
        path:'booking',
        element:<Booking/>
      },
      {
        path:'adminHome',
        element:<User/>
      },
      {
        path:'reservation',
        element:<Reservation/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'review',
        element:<AddReview/>
      },
      {
        path:'allUsers',
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
    ]
  }
]);

export default router;

