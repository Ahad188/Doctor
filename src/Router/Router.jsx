import {createBrowserRouter, } from "react-router-dom";
 
import App from "../App";
import Home from "../Page/Home/Home/Home";
import AllDoctor from "../Page/Doctor/AllDoctor";
import DoctorDetails from "../Page/Doctor/DoctorDetails";
import Services from "../Page/Home/Services/Services";

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
               loader:()=>fetch('../../public/Data/Doctor.json')
          },
          {
               path:'/services',
               element:<Services></Services>
          }
          
           
       ]
     },
   ]);


   export default router;