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
import Dashboard from "../Layout/Dashboard";
import Alluser from "../Page/Dashboard/AllUser/Alluser";
import AddServices from "../Page/Dashboard/AddServices/AddServices";
import ManejServices from "../Page/Dashboard/ManejServices/ManejServices";
import AddDoctor from "../Page/Dashboard/AddDoctor/AddDoctor";
import ManejDoctor from "../Page/Dashboard/ManejDoctor/ManejDoctor";

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
     {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          children:[
               {
                    path:'/dashboard/all-users',
                    element:<Alluser></Alluser>
               },
               {
                    path:'/dashboard/add-services',
                    element:<AddServices></AddServices>
               },
               {
                    path:'/dashboard/manege-services',
                    element:<ManejServices></ManejServices>
               },
               {
                    path:'/dashboard/add-doctor',
                    element:<AddDoctor></AddDoctor>
               },
               {
                    path:'manege-doctor',
                    element:<ManejDoctor></ManejDoctor>
               }
          ]
     }
   ]);


   export default router;