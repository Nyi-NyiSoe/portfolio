import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Project from "../pages/Project"
import { AppConstantRoutes } from "./path"

export const getDefaultRoute = () => {
  return AppConstantRoutes.paths.default
}

export const router = createBrowserRouter([
    {
        path: AppConstantRoutes.paths.default,
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            
            },{
                path: AppConstantRoutes.paths.projects,
                element: <Project/>
            },
            
        ]
    }
])