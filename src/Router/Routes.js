import { createBrowserRouter } from "react-router-dom"

import AddTour from "../components/AddTour/AddTour"
import Home from "../components/Home/Home"
import Main from "../components/MainLayout/Main"

import Tours from "../components/Tours/Tours"


  const routes =  createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/tours',
                element:<Tours/>
            },
            {
                path:'/addtour',
                element:<AddTour/>
            }
        ]
    }
  ])
 






 export default routes