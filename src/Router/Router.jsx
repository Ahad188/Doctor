import {createBrowserRouter, } from "react-router-dom";
 
import App from "../App";
import Home from "../Page/Home/Home/Home";
import AllDoctor from "../Page/Doctor/AllDoctor";
import DoctorDetails from "../Page/Doctor/DoctorDetails";
import Services from "../Page/Home/Services/Services";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Private from "../Private/Private";

const router = createBrowserRouter([
     {
       path: "/",
       element:  <App></App>,
       children:[
          {
               path:'/',
               element:<Home/>
          },
          {
               path:'doctor',
               element:<AllDoctor></AllDoctor>,
               loader:()=>fetch('http://localhost:5000/doctor')
          },
          {
               path:'/services',
               element:<Services></Services>
          },
          {
               path:'/details/:id',
               element:<Private><DoctorDetails></DoctorDetails></Private>,
               loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
          },
          {
               path:'/contact',
               element:<Contact></Contact>
          },
          {
               path:'/login',
               element:<Login></Login>
          },
          {
               path:'/register',
               element:<Register></Register>
          }
          
           
       ]
     },
   ]);


   export default router;