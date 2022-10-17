import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import CheckOut from "../CheckOut/CheckOut";
import Login from "../Login/Login";
import Order from "../Orders/Order";
import { productLoder } from "../ProductLoder/ProductLoder";
import SignUp from "../Registration/SignUp";
import Shop from "../Shop/Shop";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                loader:productLoder,
                element:<Shop></Shop>
            },
            {
                path:'/orders',
                loader:productLoder,
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ])
    }
])