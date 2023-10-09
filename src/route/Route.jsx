import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";




const router = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/conference/:id'
         }
      ]
   },
])

export default router;