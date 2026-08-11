import {createBrowserRouter} from "react-router-dom";
import FaceExpressionDetector from "./Feature/Face_Expression/Pages/FaceExpression_Detector";
import Login from "./Feature/Auth/pages/Login";
import Register from "./Feature/Auth/pages/Register";


export const router = createBrowserRouter([
    
    // {
    //     path:"/",
    //     element:<Home/>
    // },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Register",
        element:<Register/>
    }
])



