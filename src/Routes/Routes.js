import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Pages/Home/Home";
import Blogs from "../component/Pages/shared/Blogs/Blogs";
import Catagory from "../component/Pages/shared/catagory/Catagory";
import Courses from "../component/Pages/shared/courses/Courses";
import Login from "../component/Pages/shared/Login/Login";
import Register from "../component/Pages/shared/register/Register";
import Main from "../leyout/Main/Main";
import PribateRoute from "./pribetRoute/PribateRoute";

export const routes=createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5500/courses')
           
        },
        {
          path:'/catagory/:id',
          element: <Catagory></Catagory>,
          loader: ({params})=> fetch(`http://localhost:5500/catagory/${params.id}`)
       },
       {
         path:'/course/:id',
         element:<PribateRoute><Courses></Courses></PribateRoute>,
         loader: ({params}) => fetch(`http://localhost:5500/course/${params.id}`)
       },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/Register',
          element:<Register></Register>
        },
       
        

      ]
    }
]);