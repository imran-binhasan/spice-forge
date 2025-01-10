import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Auth from "../layouts/Auth";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";


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
  }
]);

export default router;

