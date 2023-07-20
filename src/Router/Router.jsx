import {createBrowserRouter, } from "react-router-dom";
 
import App from "../App";
import Home from "../Page/Home/Home/Home";
import AllDoctor from "../Page/Doctor/AllDoctor";
import DoctorDetails from "../Page/Doctor/DoctorDetails";
import Services from "../Page/Home/Services/Services";
import Contact from "../Page/Contact/Contact";

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
               element:<DoctorDetails></DoctorDetails>,
               loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
          },
          {
               path:'/contact',
               element:<Contact></Contact>
          }
          
           
       ]
     },
   ]);


   export default router;