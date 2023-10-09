import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ConferenceDetails from "../pages/components/ConferenceDetails";
import PrivateRoute from "./PrivateRoute";




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
            path: '/conference/:id',
            element: <PrivateRoute><ConferenceDetails></ConferenceDetails></PrivateRoute>,
            loader: () => fetch('/conference.json'),
         }
      ]
   },
])

export default router;