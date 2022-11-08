import { createBrowserRouter } from "react-router-dom"

import AddTour from "../components/AddTour/AddTour"
import Home from "../components/Home/Home"
import Main from "../components/MainLayout/Main"
import MyReview from "../components/MyReview/MyReview"

import Tours from "../components/Tours/Tours"


  const routes =  createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                loader: ()=> fetch('http://localhost:5000/hometours'),
                element: <Home></Home>
            },
            {
                path: '/tours',
                loader: ()=> fetch('http://localhost:5000/tours'),
                element:<Tours/>
            },
            {
                path:'/addtour',
                element:<AddTour/>
            },
            {
                path:'/myreview',
                element:<MyReview/>
            }
        ]
    }
  ])
 






 export default routes