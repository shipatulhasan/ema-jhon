import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Order from "../Orders/Order";
import { productLoder } from "../ProductLoder/ProductLoder";
import Shop from "../Shop/Shop";

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
            }
        ])
    }
])